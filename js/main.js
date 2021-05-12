const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const funfacts = document.querySelector("#fun-facts");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");
const factContent = document.querySelector("#fact-content");

about.addEventListener("click", () => {
  const aboutBox = new WinBox({
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
  const contactBox = new WinBox({
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
  const factBox = new WinBox({
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
