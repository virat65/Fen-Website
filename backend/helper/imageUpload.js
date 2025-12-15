const imageUpload=(file,folder="images")=>{
  try {
const imageExtension = file.name.split(".").pop()
console.log(imageExtension,"imageExtension")
const imageRandomeName = Math.random().toString(36)
console.log(imageRandomeName,"imageRandomName")
const imagename = imageRandomeName.substring(2)
console.log(imagename,"imagename")
const image = imagename + "."+ imageExtension
file.mv(`public/${folder}/${image}`)
return image
  } catch (error) {
    console.log(`Error occured in imageupload ${error}`)
  }
}

export default imageUpload
