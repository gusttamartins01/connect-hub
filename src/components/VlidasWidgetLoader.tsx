"use client";

import { useEffect } from "react";

interface VLibrasWidgetInstance {
  init?: () => void;
}

interface VLibrasWidget {
  new (url: string): VLibrasWidgetInstance;
}

declare global {
  interface Window {
    VLibras: {
      Widget: VLibrasWidget;
    };
    vlibrasReady?: boolean;
  }
}

const VLIBRAS_SCRIPT_URL = "https://vlibras.gov.br/app/vlibras-plugin.js";
const VLIBRAS_SCRIPT_ID = "vlibras-script";
const VLIBRAS_CONTAINER_SELECTOR = "div[vw]";
const VLIBRAS_CONTAINER_HTML = `
  <div vw class="enabled">
    <div vw-access-button class="active" style="display: block;"></div>
    <div vw-plugin-wrapper>
      <div class="vw-plugin-top-wrapper"></div>
    </div>
  </div>
`;

const initializeVLibrasWidget = () => {
  setTimeout(() => {
    if (window.VLibras) {
      try {
        new window.VLibras.Widget("https://vlibras.gov.br/app");
        window.vlibrasReady = true;
        window.dispatchEvent(new Event("vlibras-ready"));
        console.log("VLibras Widget inicializado com sucesso.");
      } catch (error) {
        console.error("Erro ao inicializar o VLibras Widget:", error);
      }
    } else {
      console.warn("VLibras não disponível após o delay.");
    }
  }, 200);
};

const loadVLibrasScript = () => {
  if (document.getElementById(VLIBRAS_SCRIPT_ID)) {
    initializeVLibrasWidget();
    return;
  }

  const script = document.createElement("script");
  script.src = VLIBRAS_SCRIPT_URL;
  script.async = true;
  script.id = VLIBRAS_SCRIPT_ID;
  script.onload = initializeVLibrasWidget;

  document.body.appendChild(script);
};

export function VlidasWidgetLoader() {
  useEffect(() => {
    if (!document.querySelector(VLIBRAS_CONTAINER_SELECTOR)) {
      const vwDiv = document.createElement("div");
      vwDiv.innerHTML = VLIBRAS_CONTAINER_HTML;
      document.body.appendChild(vwDiv);
    }

    loadVLibrasScript();

    return () => {
      const addedDiv = document.querySelector(VLIBRAS_CONTAINER_SELECTOR);
      const addedScript = document.getElementById(VLIBRAS_SCRIPT_ID);

      if (addedDiv && document.body.contains(addedDiv)) {
        document.body.removeChild(addedDiv);
      }
      if (addedScript && document.body.contains(addedScript)) {
        document.body.removeChild(addedScript);
      }

      window.vlibrasReady = false;
    };
  }, []);

  return null;
}