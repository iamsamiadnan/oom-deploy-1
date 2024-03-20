"use client";
import { Button, Input } from "antd";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export default function Checkout() {
  const form = useForm();
  const { register, control } = form;

  return (
    <div>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName">First Name</label>
          {/* <Input
            type="text"
            placeholder="First Name"
            id="firstName"
            {...register("firstName")}
          /> */}

          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder="First Name" />
            )}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="lastName">Last Name</label>
          <Input
            placeholder="Last Name"
            id="lastName"
            {...register("lastName")}
          />
        </div>
        {/* 
      <div className="flex flex-col gap-2">
        <label>Phone Number</label>
        <Input placeholder="Basic usage" />
      </div>

      <div className="flex flex-col gap-2">
        <label>Room Number</label>
        <Input placeholder="Basic usage" />
      </div> */}

        <Button type="primary">Checkout</Button>
      </form>
      <DevTool control={control} />
    </div>
  );
}
