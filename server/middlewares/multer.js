import multer from "multer";

//createing mutler middleware for parsing formdata
const storage = multer.diskStorage({
    filename: function(re, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage})

export default upload