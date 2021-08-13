package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/kissadada/gaia/x/gold/types"
	"github.com/spf13/cobra"
)

func NewTxCmd() *cobra.Command {
	goldTxCmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      "Gold",
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	goldTxCmd.AddCommand(
		NewBuyGoldCmd(),
		NewSellGoldCmd(),
	)

	return goldTxCmd
}

func NewBuyGoldCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:  "buygold [addr] [amount]",
		Args: cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			cmd.Flags().Set(flags.FlagFrom, args[0])
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}
			amount, ok := sdk.NewIntFromString(args[1])
			if !ok {
				return err
			}

			addr := clientCtx.GetFromAddress()

			msg := types.NewMsgBuyGold(addr, amount)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}

			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func NewSellGoldCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:  "sellgold [addr] [amount]",
		Args: cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			cmd.Flags().Set(flags.FlagFrom, args[0])
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}
			amount, ok := sdk.NewIntFromString(args[1])
			if !ok {
				return err
			}

			addr := clientCtx.GetFromAddress()

			msg := types.NewMsgSellGold(addr, amount)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}

			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
