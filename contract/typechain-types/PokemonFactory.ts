/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace PokemonFactory {
  export type SkillStruct = {
    name: PromiseOrValue<string>;
    description: PromiseOrValue<string>;
  };

  export type SkillStructOutput = [string, string] & {
    name: string;
    description: string;
  };

  export type PokemonStruct = {
    id: PromiseOrValue<BigNumberish>;
    name: PromiseOrValue<string>;
    skills: PokemonFactory.SkillStruct[];
    pokemonType: PromiseOrValue<BigNumberish>[];
  };

  export type PokemonStructOutput = [
    BigNumber,
    string,
    PokemonFactory.SkillStructOutput[],
    number[]
  ] & {
    id: BigNumber;
    name: string;
    skills: PokemonFactory.SkillStructOutput[];
    pokemonType: number[];
  };
}

export interface PokemonFactoryInterface extends utils.Interface {
  functions: {
    "createPokemon(string,uint256,(string,string)[],uint8[])": FunctionFragment;
    "getAllPokemons()": FunctionFragment;
    "pokemonToOwner(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createPokemon"
      | "getAllPokemons"
      | "pokemonToOwner"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createPokemon",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PokemonFactory.SkillStruct[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllPokemons",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pokemonToOwner",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "createPokemon",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllPokemons",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pokemonToOwner",
    data: BytesLike
  ): Result;

  events: {
    "pokemonCreated(uint256,string,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "pokemonCreated"): EventFragment;
}

export interface pokemonCreatedEventObject {
  id: BigNumber;
  name: string;
  skillCount: BigNumber;
}
export type pokemonCreatedEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  pokemonCreatedEventObject
>;

export type pokemonCreatedEventFilter = TypedEventFilter<pokemonCreatedEvent>;

export interface PokemonFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PokemonFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createPokemon(
      _name: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      _skills: PokemonFactory.SkillStruct[],
      _pokemonType: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAllPokemons(
      overrides?: CallOverrides
    ): Promise<[PokemonFactory.PokemonStructOutput[]]>;

    pokemonToOwner(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  createPokemon(
    _name: PromiseOrValue<string>,
    _id: PromiseOrValue<BigNumberish>,
    _skills: PokemonFactory.SkillStruct[],
    _pokemonType: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAllPokemons(
    overrides?: CallOverrides
  ): Promise<PokemonFactory.PokemonStructOutput[]>;

  pokemonToOwner(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    createPokemon(
      _name: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      _skills: PokemonFactory.SkillStruct[],
      _pokemonType: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    getAllPokemons(
      overrides?: CallOverrides
    ): Promise<PokemonFactory.PokemonStructOutput[]>;

    pokemonToOwner(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "pokemonCreated(uint256,string,uint256)"(
      id?: null,
      name?: null,
      skillCount?: null
    ): pokemonCreatedEventFilter;
    pokemonCreated(
      id?: null,
      name?: null,
      skillCount?: null
    ): pokemonCreatedEventFilter;
  };

  estimateGas: {
    createPokemon(
      _name: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      _skills: PokemonFactory.SkillStruct[],
      _pokemonType: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAllPokemons(overrides?: CallOverrides): Promise<BigNumber>;

    pokemonToOwner(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createPokemon(
      _name: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      _skills: PokemonFactory.SkillStruct[],
      _pokemonType: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAllPokemons(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pokemonToOwner(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
