const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const Job = require('../models/Job');

// Create a Job (Protected)
router.post('/create', protect, async (req, res) => {
  const { title, company, location, salary, description } = req.body;

  try {
    const newJob = new Job({
      title,
      company,
      location,
      salary,
      description,
      user: req.user.id, // Job poster (from token)
    });

    const job = await newJob.save();
    res.status(201).json(job);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server Error' });
  }
});

// Get All Jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
  }
});

// Get Single Job by ID
router.get('/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ msg: 'Job not found' });
    }

    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
  }
});

// Update Job (Only Job Owner Can Update)
router.put('/:id', protect, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ msg: 'Job not found' });
    }

    // Check if the logged-in user is the job poster
    if (job.user.toString() !== req.user.id) {
      return res.status(403).json({ msg: 'Not authorized' });
    }

    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedJob);
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
  }
});

// Delete Job (Only Job Owner Can Delete)
router.delete('/:id', protect, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ msg: 'Job not found' });
    }

    // Check if the logged-in user is the job poster
    if (job.user.toString() !== req.user.id) {
      return res.status(403).json({ msg: 'Not authorized' });
    }

    await job.deleteOne();
    res.status(200).json({ msg: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
  }
});

// Job Application Route
router.post('/apply/:jobId', protect, async (req, res) => {
  const { resume, coverLetter } = req.body;

  try {
    const job = await Job.findById(req.params.jobId);

    if (!job) {
      return res.status(404).json({ msg: 'Job not found' });
    }

    const application = {
      user: req.user.id,
      resume,
      coverLetter,
      appliedAt: new Date(),
    };

    job.applications.push(application);
    await job.save();

    res.status(201).json({ msg: 'Application submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server Error' });
  }
});

module.exports = router;
