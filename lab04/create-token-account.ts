import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import {
  createAssociatedTokenAccount,
  getOrCreateAssociatedTokenAccount,
} from "@solana/spl-token";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

const account = getKeypairFromEnvironment("SECRET_KEY");

const TOKEN_MINT = new PublicKey("GFHNsuAi6Sxr3CgitSW6yk3fdmT2LTR1p2PKSvFcXUY");

const tokenAccount = await getOrCreateAssociatedTokenAccount(
  connection,
  account,
  TOKEN_MINT,
  account.publicKey
);

console.log(`Token account address: ${tokenAccount.address}`);
