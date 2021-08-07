package keeper

import (
	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/kissadada/gaia/x/gold/types"
)

type Keeper struct {
	storeKey   sdk.StoreKey
	cdc        codec.BinaryMarshaler
	authkeeper types.AccountKeeper
	bankKeeper types.BankKeeper
}

func NewKeeper(
	cdc codec.BinaryMarshaler, key sdk.StoreKey, ac types.AccountKeeper, bc types.BankKeeper,
) Keeper {
	return Keeper{
		storeKey:   key,
		cdc:        cdc,
		authkeeper: ac,
		bankKeeper: bc,
	}
}

func (k Keeper) GetGoldAmount(ctx sdk.Context) int64 {

	return 0
}

func (k Keeper) SetSGoldAmount(ctx sdk.Context, count int64) {

}
