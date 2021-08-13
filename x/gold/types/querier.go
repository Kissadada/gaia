package types

import sdk "github.com/cosmos/cosmos-sdk/types"

const (
	QueryGoldBalance = "goldBalance"
)

type QueryGoldBalancerParams struct {
	Address sdk.AccAddress
}
