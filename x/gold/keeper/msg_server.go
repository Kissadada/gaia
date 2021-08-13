package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/kissadada/gaia/x/gold/types"
)

type msgServer struct {
	Keeper
}

const goldCoinDenom = "goldcoin"

var _ types.MsgServer = msgServer{}

func NewMsgServerImpl(keeper Keeper) types.MsgServer {
	return &msgServer{Keeper: keeper}
}

func (s msgServer) BuyGold(goCtx context.Context, msg *types.MsgBuyGold) (*types.MsgBuyGoldResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	addr, err := sdk.AccAddressFromBech32(msg.Address)
	if err != nil {
		return nil, err
	}

	goldBalance := s.Keeper.GetGoldAmount(ctx, addr)
	balance := s.Keeper.bankKeeper.GetBalance(ctx, addr, goldCoinDenom)
	goldCoinDemand := sdk.NewCoin(goldCoinDenom, msg.Amount)

	if balance.IsGTE(goldCoinDemand) {

		s.Keeper.SetGoldAmount(ctx, addr, goldBalance.Add(msg.Amount))
		err = s.Keeper.bankKeeper.SetBalance(ctx, addr, balance.Sub(goldCoinDemand))
		if err != nil {
			return nil, err
		}
	}

	return nil, nil
}

func (s msgServer) SellGold(goCtx context.Context, msg *types.MsgSellGold) (*types.MsgSellGoldResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	addr, err := sdk.AccAddressFromBech32(msg.Address)
	if err != nil {
		return nil, err
	}

	goldBalance := s.Keeper.GetGoldAmount(ctx, addr)
	balance := s.Keeper.bankKeeper.GetBalance(ctx, addr, goldCoinDenom)
	goldCoinAdd := sdk.NewCoin(goldCoinDenom, msg.Amount)

	if goldBalance.GTE(msg.Amount) {
		s.Keeper.SetGoldAmount(ctx, addr, goldBalance.Sub(msg.Amount))

		err = s.Keeper.bankKeeper.SetBalance(ctx, addr, balance.Add(goldCoinAdd))
		if err != nil {
			return nil, err
		}
	}

	return nil, nil
}
