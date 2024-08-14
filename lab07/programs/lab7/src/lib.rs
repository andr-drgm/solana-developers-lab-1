use anchor_lang::prelude::*;

declare_id!("4pdvKsybf9iHGJpCCavZCq1Pnch1nQmQqku8qb5VXUum");

#[program]
pub mod lab7 {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
