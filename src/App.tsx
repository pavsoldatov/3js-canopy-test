import GroundPlane from "./components/GroundPlane";
import CanvasContainer from "./components/CanvasContainer";
import Skybox from "./components/Skybox";
import AsideControls from "./components/AsideControls";
import { AssetsProvider } from "./context/AssetsContext/AssetsProvider";
import { Suspense } from "react";
import { AsideControlsGui } from "./components/AsideControlsGui";
import { CanopyScene } from "./components/CanopyScene";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "100vh",
        }}
      >
        <AsideControls />
        <CanvasContainer>
          <Skybox />
          <GroundPlane />
          <Suspense>
            <AssetsProvider>
              <CanopyScene />
            </AssetsProvider>
          </Suspense>
        </CanvasContainer>
      </div>
      <AsideControlsGui />
    </>
  );
}

export default App;
