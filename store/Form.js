export default {
  header: "Submit Photo",
  view: "Form"
  function addPicOnFormSubmit() {
    document.querySelector("form")
      addEventListener("submit", event => {
        event.preventDefault();
        let inputList = event.target.elements
        let pictureObject = {
          url: inputList[0].value,
          title: inputList[1].value
        }
        StaticRange.Gallery.pictures.push(pictureObject)
      }
  }
};
