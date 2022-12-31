import fs from "fs";

const getManifest = () => {
  try {
    return JSON.parse(
      fs.readFileSync(`${__dirname}/public/asset-manifest.json`)
    );
  } catch (e) {
    console.log(e);
  }
};

export const requireManifest = (req, res, next) => {
  if (!req.hashManifest) req.hashManifest = getManifest();
  next();
};
