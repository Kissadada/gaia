package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
)

const (
	TypeMsgBuyGold  = "buy-gold"
	TypeMsgSendGold = "sell-gold"
)

var (
	_ sdk.Msg = &MsgBuyGold{}
	_ sdk.Msg = &MsgSellGold{}
)

func NewMsgBuyGold(address sdk.AccAddress, amount sdk.Int) *MsgBuyGold {
	return &MsgBuyGold{Address: address.String(), Amount: amount}
}

func (msg MsgBuyGold) Route() string { return RouterKey }

func (msg MsgBuyGold) Type() string { return TypeMsgBuyGold }

func (msg MsgBuyGold) ValidateBasic() error {
	return nil
}

func (msg MsgBuyGold) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(&msg)
	return sdk.MustSortJSON(bz)
}

func (msg MsgBuyGold) GetSigners() []sdk.AccAddress {
	addr, err := sdk.AccAddressFromBech32(msg.Address)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{addr}
}

func NewMsgSellGold(address sdk.AccAddress, amount sdk.Int) *MsgSellGold {
	return &MsgSellGold{Address: address.String(), Amount: amount}
}

func (msg MsgSellGold) Route() string { return RouterKey }

func (msg MsgSellGold) Type() string { return TypeMsgSendGold }

func (msg MsgSellGold) ValidateBasic() error {
	return nil
}

func (msg MsgSellGold) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(&msg)
	return sdk.MustSortJSON(bz)
}

func (msg MsgSellGold) GetSigners() []sdk.AccAddress {
	addr, err := sdk.AccAddressFromBech32(msg.Address)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{addr}
}
