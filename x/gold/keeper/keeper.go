package keeper

import (
	"github.com/cosmos/cosmos-sdk/codec"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/kissadada/gaia/x/gold/types"
)

type Keeper struct {
	storeKey   sdk.StoreKey
	cdc        codec.BinaryMarshaler
	bankKeeper types.BankKeeper
}

func NewKeeper(
	cdc codec.BinaryMarshaler, key sdk.StoreKey, bc types.BankKeeper,
) Keeper {
	return Keeper{
		storeKey:   key,
		cdc:        cdc,
		bankKeeper: bc,
	}
}

func (k Keeper) GetGoldAmount(ctx sdk.Context, addr sdk.AccAddress) sdk.Int {

	store := ctx.KVStore(k.storeKey)
	balancesStore := prefix.NewStore(store, types.GoldPrefix)
	bz := balancesStore.Get(addr.Bytes())

	if bz == nil {
		return sdk.ZeroInt()
	}

	var balance sdk.IntProto
	k.cdc.MustUnmarshalBinaryBare(bz, &balance)

	return balance.Int
}

func (k Keeper) SetGoldAmount(ctx sdk.Context, addr sdk.AccAddress, amount sdk.Int) {
	store := ctx.KVStore(k.storeKey)
	balancesStore := prefix.NewStore(store, types.GoldPrefix)

	bz := k.cdc.MustMarshalBinaryBare(&sdk.IntProto{Int: amount})
	balancesStore.Set(addr.Bytes(), bz)

}
