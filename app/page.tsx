// import { app } from "@tauri-apps/api";
// import React from "react";

export default function Home() {
  // const [version, setVersion] = React.useState("");
  // This is a good place to check the platform and arch
  console.log(`Platform: ${process.platform}`);
  console.log(`Arch: ${process.arch}`);
  console.log(
    `https://releases.myapp.com/${process.platform}/${process.arch}/0.1.0/myapp-${process.platform}-${process.arch}-0.1.0.zip`
  );

  // console.log(`Version: ${version}`);

  // React.useEffect(() => {
  //   // Fetch the app version
  //   (async () => {
  //     const v = await app.getVersion();
  //     setVersion(v);
  //   })();
  // }, []);

  // React.useEffect(() => {
  //   console.log(`Version: ${version}`);
  // }, [version]);

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Tauri Updater
      </div>
    </main>
  );
}
