const TourModel = require('../models/toursModel');

exports.getAllTours = async (req, res) => {
  try {
    const allTours = await TourModel.find();
    res.status(200).json({
      status: 'success',
      total: allTours.length,
      data: {
        tours: allTours,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
};
exports.getTour = async (req, res) => {
  try {
    const tour = await TourModel.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      message: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'failed',
      message: err,
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await TourModel.create(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const updatedTour = await TourModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        runValidators: true,
        returnDocument: true,
      }
    );
    res.status(201).json({
      status: 'success',
      data: {
        updatedTour,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'This route is not yet defined!',
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    await TourModel.findByIdAndDelete(req.params.id);
    res.status(201).json({
      status: 'success',
      message: 'Tour Deleted Successfully!!!',
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'This route is not yet defined!',
    });
  }
};
