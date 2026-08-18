//fix nh ha company chng krkste

// imagekit==>cloud storage provider==>url
// import ImageKit from '@imagekit/nodejs';
const ImageKit=require('@imagekit/nodejs')
const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY, 
});

async function uploadfile(buffer){
    console.log(buffer);
const response = await client.files.upload({
  // file: fs.createReadStream('path/to/file'),
file:buffer.toString("base64"),
  fileName: 'file-name.jpg',
});
return response;
}
module.exports=uploadfile