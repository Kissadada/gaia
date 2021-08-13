package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/kissadada/gaia/x/gold/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type Querier struct {
	Keeper
}

var _ types.QueryServer = Querier{}

func (k Querier) GoldBalance(c context.Context, req *types.QueryGoldBalanceRequest) (*types.QueryGoldBalanceResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "empty request")
	}

	addr, err := sdk.AccAddressFromBech32(req.Address)

	if err != nil {
		return nil, err
	}

	ctx := sdk.UnwrapSDKContext(c)
	goldBalance := k.GetGoldAmount(ctx, addr)

	return &types.QueryGoldBalanceResponse{Amount: goldBalance.String()}, nil
}
