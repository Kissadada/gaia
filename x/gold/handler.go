package gold

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/kissadada/gaia/x/gold/keeper"
	"github.com/kissadada/gaia/x/gold/types"

	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
)

func NewHandler(k keeper.Keeper) sdk.Handler {
	msgServer := keeper.NewMsgServerImpl(k)

	return func(ctx sdk.Context, msg sdk.Msg) (*sdk.Result, error) {
		ctx = ctx.WithEventManager(sdk.NewEventManager())

		switch msg := msg.(type) {

		case *types.MsgBuyGold:
			res, err := msgServer.BuyGold(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgSellGold:
			res, err := msgServer.SellGold(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *banktypes.MsgSend:
			return sdk.WrapServiceResult(ctx, nil, nil)

		default:
			return nil, sdkerrors.Wrapf(sdkerrors.ErrUnknownRequest, "unrecognized gold message type: %T", msg)
		}
	}

}
