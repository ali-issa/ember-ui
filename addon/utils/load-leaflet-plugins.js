import loadAssets from './load-assets';

export default function loadLeafletPlugins(assets = { basePath: null, scripts: [], stylesheets: [], globalIndicatorKey: null }) {
    const basePath = assets.basePath ?? 'engines-dist/leaflet';
    loadAssets({ basePath, ...assets });
}
