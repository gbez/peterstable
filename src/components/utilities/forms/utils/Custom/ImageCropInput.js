import React, { PureComponent, Fragment } from "react";
import ReactCrop from "react-image-crop";

class ImageCropInput extends PureComponent {
  constructor(props) {
    super(props);
    console.log(this.props.aspect);
    this.state = {
      src: null,
      visible: true,
      crop: {
        unit: "%",
        width: 30,
        aspect: this.props.aspect,
      },
    };
    this.saveImage = this.saveImage.bind(this);
  }

  saveImage = (e) => {
    e.target = { name: this.props.name, value: this.state.croppedImageUrl };
    this.setState({ visible: !this.state.visible });
    this.props.onChange(e);
  };

  onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  onImageLoaded = (image) => {
    this.imageRef = image;
  };

  onCropComplete = (crop) => {
    this.makeClientCrop(crop);
  };

  onCropChange = (crop, percentCrop) => {
    this.setState({ crop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        "newFile.jpeg"
      );
      this.setState({ croppedImageUrl });
    }
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error("Canvas is empty");
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve(this.fileUrl);
      }, "image/jpeg");
    });
  }

  render() {
    const { crop, croppedImageUrl, src } = this.state;
    //Ask for file load...
    //Once file is loaded, display image and cropped image
    //have button on bottom for submit/save.
    //This button:
    //  toggles the view of the reactCrop/crop
    //  sends onChange with the input name and croppedImageURL to Doc Form
    return (
      <div className="imageCropInput">
        <div className="fileSelect">
          <input type="file" accept="image/*" onChange={this.onSelectFile} />
        </div>
        {this.state.visible && (
          <Fragment>
            {src && (
              <ReactCrop
                src={src}
                crop={crop}
                ruleOfThirds
                onImageLoaded={this.onImageLoaded}
                onComplete={(e) => this.onCropComplete(e)}
                onChange={this.onCropChange}
              />
            )}
            {croppedImageUrl && (
              <img
                alt="Crop"
                style={{ maxWidth: "100%" }}
                src={croppedImageUrl}
              />
            )}
          </Fragment>
        )}
        <button onClick={this.saveImage}>Save Image</button>
      </div>
    );
  }
}

export default ImageCropInput;
