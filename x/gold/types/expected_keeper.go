package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
)

type BankKeeper interface {
	SetBalance(ctx sdk.Context, addr sdk.AccAddress, balance sdk.Coin) error
	GetBalance(ctx sdk.Context, addr sdk.AccAddress, denom string) sdk.Coin
}
