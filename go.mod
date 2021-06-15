module github.com/cosmos/gaia/v5

go 1.16

require (
	github.com/cosmos/cosmos-sdk v0.43.0-beta1.0.20210614144515-5cd741a8789e
	github.com/cosmos/ibc-go v1.0.0-alpha2.0.20210615093027-ca070bd2c6aa
	github.com/gorilla/mux v1.8.0
	github.com/pkg/errors v0.9.1
	github.com/rakyll/statik v0.1.7
	github.com/spf13/cast v1.3.1
	github.com/spf13/cobra v1.1.3
	github.com/stretchr/testify v1.7.0
	github.com/tendermint/tendermint v0.34.10
	github.com/tendermint/tm-db v0.6.4
)

replace google.golang.org/grpc => google.golang.org/grpc v1.33.2

replace github.com/gogo/protobuf => github.com/regen-network/protobuf v1.3.3-alpha.regen.1
