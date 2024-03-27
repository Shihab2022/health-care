import multer from 'multer';
import path, { resolve } from 'path';
import { v2 as cloudinary } from 'cloudinary';
import config from '../../config';

cloudinary.config({
    cloud_name: 'dwqdndar8',
    api_key: config.cloudinary.api_key,
    api_secret: config.cloudinary.api_secret
});
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(process.cwd(), "uploads"))
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const uploadToCloudinary = (file: any) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(file.path,
            { public_id: "olympic_flag" },
            (error, result) => {
                if (error) {
                    reject(error)
                }
                else {
                    resolve(result)
                }
            });
    })

}
const upload = multer({ storage: storage })

export const fileUploader = {
    upload,
    uploadToCloudinary
}