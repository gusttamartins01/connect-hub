interface VLibrasWidgetInstance {
  init?: () => void;
}

interface VLibrasWidget {
  new (url: string): VLibrasWidgetInstance;
}

interface Window {
  VLibras: {
    Widget: VLibrasWidget;
  };
}