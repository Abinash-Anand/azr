const mongoose = require('mongoose');

const vehicleTypeSchema = new mongoose.Schema({
    vehicleName: {
        type: String,
        required: true,
        trim: true
    },
    vehicleType: {
        type: String,
        required: true
    },
    vehicleImage: {
        fileName: {
            type: String,
            required: true
        },
        filePath: {
            type: String,
            required: true
        },
        fileSize: {
            type: Number,
            required: true
        },
        fileType: {
            type: String,
            required: true
        }
    }
});

const vehicleTypeModel = mongoose.model('VehicleType', vehicleTypeSchema);
module.exports = vehicleTypeModel;
