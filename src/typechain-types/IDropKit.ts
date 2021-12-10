/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IDropKitInterface extends utils.Interface {
  functions: {
    "addFees(uint256)": FunctionFragment;
    "addFeesClaimed(uint256)": FunctionFragment;
    "commission(uint256)": FunctionFragment;
    "getFees(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addFees",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addFeesClaimed",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "commission",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getFees", values: [string]): string;

  decodeFunctionResult(functionFragment: "addFees", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addFeesClaimed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "commission", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getFees", data: BytesLike): Result;

  events: {
    "CollectionCreated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CollectionCreated"): EventFragment;
}

export type CollectionCreatedEvent = TypedEvent<
  [string],
  { collectionAddress: string }
>;

export type CollectionCreatedEventFilter =
  TypedEventFilter<CollectionCreatedEvent>;

export interface IDropKit extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IDropKitInterface;

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
    addFees(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addFeesClaimed(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    commission(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getFees(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  addFees(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addFeesClaimed(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  commission(
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getFees(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    addFees(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    addFeesClaimed(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    commission(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFees(account: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "CollectionCreated(address)"(
      collectionAddress?: string | null
    ): CollectionCreatedEventFilter;
    CollectionCreated(
      collectionAddress?: string | null
    ): CollectionCreatedEventFilter;
  };

  estimateGas: {
    addFees(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addFeesClaimed(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    commission(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFees(account: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addFees(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addFeesClaimed(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    commission(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFees(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
