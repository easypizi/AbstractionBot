// modules.define(
//   "form",

//   ["i-bem-dom", "BEMHTML", "button", "editor", "jquery", "image", "attach"],

//   function(provide, bemDom, BEMHTML, Button, Editor, $, Image, Attach) {
//     provide(
//       bemDom.declBlock(
//         this.name,
//         {
//           onSetMod: {
//             js: {
//               inited: function() {
//                 this.__base.apply(this, arguments);
//                 let editorData = this.findChildBlock(Editor);

//                 this.isValid = this.params && this.params.article;

//                 if (this.isValid && this.isValid.md !== "") {
//                   editorData.setVal(this.params.article.md);
//                 }

//                 this.filePath = this.isValid && this.isValid.mainImg ? this.params.article.mainImg : "";

//                 this.shareImg = this.isValid && this.isValid.shareImg ? this.params.article.shareImg : "";

//                 this.numId = Number(this.params.currentID);

//                 let attaches = this.findChildBlocks(Attach);

//                 let submitBtn = this.findChildBlock({
//                   block: Button,
//                   modName: "type",
//                   modVal: "submit"
//                 });

//                 attaches.map(btn => {
//                   let attachControl = btn.findChildElem("control").domElem[0];

//                   btn._events().on("change", () => {
//                     let isEmpty = btn.getVal() === "" ? true : false;
//                     if (!isEmpty) {
//                       let file = attachControl.files[0];
//                       this._upload(file);

//                       if (btn.hasMod("share")) {
//                         this.shareImg = "assets/images/" + file.name;
//                         $(".form__share-image-preview").attr("src", this.shareImg);
//                       } else if (btn.hasMod("upload")) {
//                         this.uploadPath = "assets/images/" + file.name;
//                         $(".form__upload-image-preview").attr("src", this.uploadPath);
//                         $(".form-field__linkArea").html("<div>Your link: <p>assets/images/" + file.name + "</p></div>");
//                       } else {
//                         this.filePath = "assets/images/" + file.name;
//                         $(".form__main-image-preview").attr("src", this.filePath);
//                       }
//                     }
//                   });
//                 });

//                 submitBtn._domEvents().on("click", e => {
//                   e.preventDefault();
//                   let data = this.getVal();
//                   let pureHtml = editorData.render();
//                   let titleId = data.ffTitle.replace(/[^a-z0-9A-Z ]/g, "").replace(/[ ]/g, "-");

//                   let DataObject = {
//                     title: data.ffTitle,
//                     author: data.ffAuthor,
//                     authorLink: data.ffAuthorLink,
//                     seoTitle: data.ffSeoTitle,
//                     seoText: data.ffSeoText,
//                     type: data.ffType,
//                     mainImg: this.filePath,
//                     shareImg: this.shareImg,
//                     time: data.ffAddons,
//                     html: pureHtml,
//                     titleId: titleId,
//                     numId: this.numId,
//                     pureMd: editorData.getVal()
//                   };
//                   this._sendOrder(DataObject);
//                 });
//               }
//             }
//           },

//           _upload: function(object) {
//             var formElement = document.querySelector("form");
//             let formData = new FormData(formElement);
//             formData.append("file", object);
//             var request = new XMLHttpRequest();
//             request.open("POST", "/api/upload", true);
//             request.setRequestHeader("Accept", "application/json");
//             request.send(formData);
//           },

//           _sendOrder: function(object) {
//             $.ajax({
//               async: true,
//               url: "/api/changeArticle",
//               crossDomain: true,
//               method: "POST",
//               data: {
//                 objects: object
//               }
//             }).done(response => {
//               if (response.status) window.location.href = "/";
//             });
//           }
//         },
//         { lazyInit: false }
//       )
//     );
//   }
// );
