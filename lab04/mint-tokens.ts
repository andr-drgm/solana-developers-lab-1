import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { mintTo } from "@solana/spl-token";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

const account = getKeypairFromEnvironment("SECRET_KEY");

const tokenMintPubKey = new PublicKey(
  "GFHNsuAi6Sxr3CgitSW6yk3fdmT2LTR1p2PKSvFcXUY"
);

const tokenAccountPubKey = new PublicKey(
  "GFHNsuAi6Sxr3CgitSW6yk3fdmT2LTR1p2PKSvFcXUY"
);

const txSign1 = await mintTo(
  connection,
  account,
  tokenMintPubKey,
  tokenAccountPubKey,
  account,
  100 * 10 ** 2
);

console.log(`Transaction signature 1: ${txSign1}`)

