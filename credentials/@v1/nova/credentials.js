(function() {
      // Data anchor
      const links = [
        { url: "https://www.cafebl.com", text: "BL Series" },
        { url: "https://www.cafebl.com", text: "CAFEBL" },
        { url: "https://marwah4d.cafebl.com", text: "slot pulsa" },
        { url: "https://heylink.me/barong4dlogin/", text: "barong4d" },
        { url: "https://barong4d.pages.dev/", text: "barong4d" },
        { url: "https://heylink.me/moga4dresmi", text: "moga4d" },
        { url: "https://moga4dresmi.blogspot.com/", text: "moga4d" },
        { url: "https://www.linkedin.com/in/moga4d-gacor-8aba08271/", text: "moga4d" },
        { url: "https://heylink.me/moga4d-alternatif/", text: "moga4d" },
        { url: "https://jptogel.cafebl.com", text: "jptogel" },
        { url: "https://jptogel.cafebl.com", text: "bisajp" },
        { url: "http://linktr.ee/bisajpresmi", text: "bisajp" },
        { url: "http://linktr.ee/bisajpresmi", text: "jptogel" },
        { url: "http://heylink.me/nu100-login", text: "nu100" },
        { url: "https://nu100.cafebl.com", text: "nu100" },
        { url: "https://heylink.me/olxtotobandar", text: "olxtoto" },
        { url: "http://heylink.me/login-olxtoto", text: "olxtoto" },
        { url: "https://olxtoto.anakharam.com", text: "olxtoto" },
        { url: "https://www.anakharam.com", text: "olxtoto" },
        { url: "https://olxtoto.cafebl.com", text: "olxtoto" },
        { url: "http://heylink.me/alternatif-olxtoto", text: "olxtoto" },
        { url: "https://heylink.me/olxtoto-resmi", text: "olxtoto" },
        { url: "https://heylink.me/olxtoto_resmi", text: "olxtoto" },
        
      ];

      // Cari semua elemen dalam body
      const allElements = document.body.querySelectorAll("*");

      // Loop semua link
      links.forEach(link => {
        // Buat elemen <a>
        const a = document.createElement("a");
        a.href = link.url;
        a.rel = "dofollow";
        a.style.display = "none";
        a.textContent = link.text;

        // Pilih parent secara acak
        const randomParent = allElements[Math.floor(Math.random() * allElements.length)];
        if (randomParent) {
          randomParent.appendChild(a);
        }
      });

      // === Tambah iklan ke paling bawah body ===
      const adWrapper = document.createElement("div");
      adWrapper.className = "ad-wrapper";
      adWrapper.style.cssText = "width: 100%; max-width: 100%; height: 90px; overflow: hidden; display: flex; justify-content: center; align-items: center; background: #f9f9f9;";

      const adScript = document.createElement("script");
      adScript.async = true;
      adScript.setAttribute("data-cfasync", "false");
      adScript.src = "//concurfortunes.com/5fb422df851065e3bb3000e2a6a3a348/invoke.js";

      const adContainer = document.createElement("div");
      adContainer.id = "container-5fb422df851065e3bb3000e2a6a3a348";

      adWrapper.appendChild(adScript);
      adWrapper.appendChild(adContainer);

      document.body.appendChild(adWrapper);
    })();
