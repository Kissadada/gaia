package types

const (
	// ModuleName defines the module name
	ModuleName = "gold"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey defines the module's message routing key
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName
)

// KVStore keys
var (
	GoldPrefix = []byte("gold")
)