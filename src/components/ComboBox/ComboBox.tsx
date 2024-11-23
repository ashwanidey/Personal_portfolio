"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


type ValuesType = {
  label: string
  value: string
}

interface ComboBoxProps {
  values: Array<ValuesType>;
  setValue: (value: string) => void;
  value : string;
  name : string;
}

export function ComboBox({values,setValue,value,name} : ComboBoxProps) {
  const [open, setOpen] = React.useState(false)
  

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-fit justify-between"
        >
          {value
            ? values.find((data) => data.value === value)?.label
            : name}
          
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit p-0">
        <Command>
          {/* <CommandInput placeholder={name} /> */}
          <CommandList>
            <CommandEmpty>404</CommandEmpty>
            <CommandGroup>
              {values.map((data) => (
                <CommandItem
                  key={data.value}
                  value={data.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === data.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {data.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
