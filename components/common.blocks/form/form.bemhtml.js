block("form").content()(function() {
  let data = this.ctx.article;
  let isEmpty = data === undefined ? true : false;

  return [
    {
      block: "form-field",
      name: "ffTitle",
      mods: {
        type: "input"
      },
      content: {
        elem: "control",
        content: [
          {
            elem: "label",
            elemMods: {
              size: "l"
            },
            content: "1. Title"
          },
          {
            block: "input",
            name: "inputTitle",
            mods: {
              type: "text",
              theme: "islands",
              size: "l",
              "has-clear": true
            },
            val: isEmpty ? "" : data.title
          }
        ]
      }
    },
    {
      block: "form-field",
      name: "ffType",
      mods: {
        type: "input"
      },
      content: {
        elem: "control",
        content: [
          {
            elem: "label",
            elemMods: {
              size: "l"
            },
            content: "2. Type"
          },
          {
            block: "input",
            name: "inputType",
            mods: {
              type: "text",
              theme: "islands",
              size: "l",
              "has-clear": true
            },
            val: isEmpty ? "" : data.type
          }
        ]
      }
    },

    {
      block: "form-field",
      name: "ffAttachMainImg",
      mods: {
        type: "attach",
        view: "main"
      },
      content: [
        {
          elem: "imgWrapper",
          content: [
            {
              elem: "label",
              elemMods: {
                theme: "islands",
                size: "l"
              },
              content: "Main Image Preview"
            },
            {
              block: "image",
              mix: {
                block: "form",
                elem: "main-image-preview"
              },
              url:
                data && data.mainImg
                  ? data.mainImg
                  : "/assets/images/default.jpg",
              width: 300,
              height: 220
            }
          ]
        },
        {
          elem: "control",
          content: [
            {
              elem: "label",
              elemMods: {
                theme: "islands",
                size: "l"
              },
              content: "3. Main image"
            },
            {
              block: "attach",
              mods: {
                theme: "islands",
                size: "xl"
              },
              button: "Add image",
              noFileText: "Size: 300 x 220 px"
            }
          ]
        }
      ]
    },
    {
      block: "form-field",
      name: "ffAttachShareImg",
      mods: {
        type: "attach",
        view: "share"
      },
      content: [
        {
          elem: "imgWrapper",
          content: [
            {
              elem: "label",
              elemMods: {
                theme: "islands",
                size: "l"
              },
              content: "Share image Preview"
            },
            {
              block: "image",
              mix: {
                block: "form",
                elem: "share-image-preview"
              },
              url:
                data && data.shareImg
                  ? data.shareImg
                  : "/assets/images/default.jpg",
              width: 300,
              height: 220
            }
          ]
        },
        {
          elem: "control",
          content: [
            {
              elem: "label",
              elemMods: {
                theme: "islands",
                size: "l"
              },
              content: "4. Share image"
            },
            {
              block: "attach",
              mods: {
                theme: "islands",
                size: "xl",
                share: true
              },
              button: "Add image",
              noFileText: "Size: 300 x 220 px"
            }
          ]
        }
      ]
    },
    {
      block: "form-field",
      name: "ffAddons",
      mods: {
        type: "input"
      },
      content: {
        elem: "control",
        content: [
          {
            elem: "label",
            elemMods: {
              theme: "islands",
              size: "l"
            },
            content: "5. Additional's"
          },
          {
            block: "input",
            name: "inputAddons",
            mods: {
              type: "text",
              theme: "islands",
              size: "l",
              "has-clear": true
            },
            val: isEmpty ? "" : data.time
          }
        ]
      }
    },
    {
      block: "form-field",
      name: "ffAuthor",
      mods: {
        type: "input"
      },
      content: {
        elem: "control",
        content: [
          {
            elem: "label",
            elemMods: {
              theme: "islands",
              size: "l"
            },
            content: "6. Author"
          },
          {
            block: "input",
            name: "inputAuthor",
            mods: {
              type: "text",
              theme: "islands",
              size: "l",
              "has-clear": true
            },
            val: isEmpty ? "" : data.author
          }
        ]
      }
    },
    {
      block: "form-field",
      name: "ffAuthorLink",
      mods: {
        type: "input"
      },
      content: {
        elem: "control",
        content: [
          {
            elem: "label",
            elemMods: {
              theme: "islands",
              size: "l"
            },
            content: "7. Author's Link"
          },
          {
            block: "input",
            name: "inputAuthorLink",
            mods: {
              type: "text",
              theme: "islands",
              size: "l",
              "has-clear": true
            },
            val: isEmpty ? "" : data.authorLink
          }
        ]
      }
    },
    {
      block: "form-field",
      name: "ffSeoTitle",
      mods: {
        type: "input"
      },
      content: {
        elem: "control",
        content: [
          {
            elem: "label",
            elemMods: {
              theme: "islands",
              size: "l"
            },
            content: "8. SEO title"
          },
          {
            block: "input",
            name: "inputSeoTitle",
            mods: {
              type: "text",
              theme: "islands",
              size: "l",
              "has-clear": true
            },
            val: isEmpty ? "" : data.seoTitle
          }
        ]
      }
    },
    {
      block: "form-field",
      name: "ffSeoText",
      mods: {
        type: "input"
      },
      content: {
        elem: "control",
        content: [
          {
            elem: "label",
            elemMods: {
              theme: "islands",
              size: "l"
            },
            content: "9. SEO Description"
          },
          {
            block: "input",
            name: "inputSeoText",
            mods: {
              type: "text",
              theme: "islands",
              size: "l",
              "has-clear": true
            },
            val: isEmpty ? "" : data.seoText
          }
        ]
      }
    },
    {
      block: "form-field",
      name: "ffAttachUpload",
      mods: {
        type: "attach",
        view: "upload"
      },
      content: [
        {
          elem: "imgWrapper",
          content: [
            {
              elem: "label",
              elemMods: {
                theme: "islands",
                size: "l"
              },
              content: "Upload image Preview"
            },
            {
              block: "image",
              mix: {
                block: "form",
                elem: "upload-image-preview"
              },
              url:
                data && data.shareImg
                  ? data.shareImg
                  : "/assets/images/default.jpg",
              width: 640,
              height: 480
            }
          ]
        },
        {
          elem: "control",
          content: [
            {
              elem: "label",
              elemMods: {
                theme: "islands",
                size: "l"
              },
              content: "10. Upload image"
            },
            {
              block: "attach",
              mods: {
                theme: "islands",
                size: "xl",
                upload: true
              },
              button: "Upload image",
              noFileText: "Upload image to use it in editor"
            }
          ]
        },
        {
          elem: "linkArea",
          content: ""
        }
      ]
    },
    {
      block: "form-field",
      name: "ffEditor",
      mods: {
        type: "textarea"
      },
      content: {
        elem: "control",
        content: [
          {
            elem: "message",
            content: [
              {
                html: "Hint : <br> use tag"
              },
              " <br> ",
              {
                html: "for breaking stroke"
              }
            ]
          },
          {
            elem: "label",
            elemMods: {
              theme: "islands",
              size: "l"
            },
            content: "11. Article Body"
          },
          {
            block: "editor",
            mods: {
              theme: "islands",
              size: "l",
              mode: "source",
              renderer: "marked",
              width: "available",
              "has-actions": true,
              "has-preview": true
            },
            value: isEmpty ? "" : data.text
          }
        ]
      }
    },
    {
      block: "button",
      mods: {
        type: "submit",
        size: "xl",
        theme: "islands",
        view: "action"
      },
      text: "save"
    }
  ];
});
