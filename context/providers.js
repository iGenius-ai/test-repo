"use client";

import { useEffect } from "react";
import { createAppKit } from "@reown/appkit/react";
import { SolanaAdapter } from "@reown/appkit-adapter-solana";
import { solana, solanaDevnet, solanaTestnet } from "@reown/appkit/networks";
import { PhantomWalletAdapter, SolflareWalletAdapter, CoinbaseWalletAdapter } from "@solana/wallet-adapter-wallets";

export default function Providers({ children }) {
  useEffect(() => {
    // Set up Solana Adapter
    const solanaAdapter = new SolanaAdapter({
      wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter(), new CoinbaseWalletAdapter()],
    });

    // Get projectId from https://cloud.reown.com
    const projectId = 'b92b8dc3cd723bb6bd144c246940324b';

    // Create AppKit
    createAppKit({
      projectId,
      adapters: [solanaAdapter],
      networks: [solanaDevnet, solanaTestnet, solana],
      features: {
        analytics: true,
      },
    });
  }, []);

  return <appkit-provider>{children}</appkit-provider>;
}