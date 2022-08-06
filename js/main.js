const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const funfacts = document.querySelector("#fun-facts");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");
const factContent = document.querySelector("#fact-content");
const funfacts_win = document.querySelector("#funfacts_win")
const about_win = document.querySelector("#about_win")
const contact_win = document.querySelector("#contact_win")

about.addEventListener("click", () => {
  if(about_win){
    about_win.click()
    return;
  }
  const aboutBox = new WinBox({
    id:"about_win",
    title: "About Me",
    background: "#00aa00",
    width: "500px",
    height: "400px",
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

contact.addEventListener("click", () => {
  if(contact_win){
    contact_win.click()
    return;
  }
  const contactBox = new WinBox({
    id:"contact_win",
    title: "Contact Me",
    background: "#00aa00",
    width: "500px",
    height: "400px",
    top: 100,
    right: 50,
    bottom: 50,
    left: 150,
    mount: contactContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

funfacts.addEventListener("click", () => {
  if(funfacts_win){
    funfacts_win.click()
    return;
  }
  const factBox = new WinBox({
    id:"funfacts_win",
    title: "Fun Facts",
    background: "#00aa00",
    width: "500px",
    height: "400px",
    top: 150,
    right: 50,
    bottom: 50,
    left: 200,
    mount: factContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
