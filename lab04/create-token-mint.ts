import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { createMint } from "@solana/spl-token";
import { clusterApiUrl, Connection } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

const account = getKeypairFromEnvironment("SECRET_KEY");

const tokenMint = await createMint(
    connection,
    account,account.publicKey,
    null,
    2
);

console.log(`Token mint address: ${tokenMint}`);

