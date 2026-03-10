// Copy Installation Command
const copyBtn = document.getElementById("copy-install-cmd");
const installCmdText = document.getElementById("install-cmd-text");

if (copyBtn && installCmdText) {
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(installCmdText.innerText.trim()).then(() => {
      // Show success state
      copyBtn.classList.add("copied");
      copyBtn.querySelector(".icon-copy").style.display = "none";
      copyBtn.querySelector(".icon-check").style.display = "block";

      // Reset after 2s
      setTimeout(() => {
        copyBtn.classList.remove("copied");
        copyBtn.querySelector(".icon-copy").style.display = "block";
        copyBtn.querySelector(".icon-check").style.display = "none";
      }, 2000);
    });
  });
}
