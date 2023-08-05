import express from "express";
import {
	getAroundYou,
	getNewReleases,
	getRandom,
	getSongs,
	getTopSongs,
	likeSong,
	saveSong,
} from "../controllers/songController.js";
import { verifyToken } from "../middleware/validateToken.js";

const router = express.Router();

router.get("/", getSongs);
router.get("/top", getTopSongs);
router.get("/releases", getNewReleases);
router.get("/random", getRandom);
router.get("/popular", getAroundYou);
router.patch("/like/:id", verifyToken, likeSong);
router.put("/save", saveSong);

export { router as songsRouter };
