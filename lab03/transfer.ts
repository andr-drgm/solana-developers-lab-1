import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  sendAndConfirmTransaction,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { createMemoInstruction } from "@solana/spl-memo";

async function main() {
  const sender = getKeypairFromEnvironment("SECRET_KEY");

  console.log(sender.publicKey.toBase58());

  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

  const receiver = new PublicKey(
    "4BC67W7SLnQ1yo8QTUqn4YW8RKWGnwj2rx5fxCYV4GrC"
  );

  const balanceSol = await connection.getBalance(receiver);

  console.log("My balance is: ", balanceSol / LAMPORTS_PER_SOL);

  const transaction = new Transaction();

  const transferTransaction = SystemProgram.transfer({
    fromPubkey: sender.publicKey,
    toPubkey: receiver,
    lamports: 0.1 * LAMPORTS_PER_SOL,
  });

  transaction.add(transferTransaction);

  const memo = "Multumesc pentru bere! Hai Romania!";

  const memoInstruction = createMemoInstruction(memo);

  transaction.add(memoInstruction);

  const signature = await sendAndConfirmTransaction(connection, transaction, [
    sender,
  ]);

  console.log("Transaction confirmed. Signature: ", signature);
}

main();
