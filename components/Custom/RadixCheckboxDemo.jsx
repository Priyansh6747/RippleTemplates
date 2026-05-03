"use client"

import { useEffect, useState } from 'react';

import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const UI = {
    labelText: "Accept terms and conditions",
};

const COLORS = {
    primary: "#111827",
    secondary: "#6b7280",
    background: "#ffffff",
};

export const RadixCheckboxDemo = ({ checked }) => {
    const [isChecked, setIsChecked] = useState(checked ?? false);

    useEffect(() => {
        setIsChecked(checked ?? false);
    }, [checked]);

    return (
        <Label
            className="flex items-center gap-x-3 cursor-pointer"
            style={{ color: COLORS.primary }}
        >
            <Checkbox
                checked={isChecked ?? false}
                onCheckedChange={setIsChecked}
            />
            {/* UI:LABEL_TEXT (The label for the checkbox) */}
            {UI.labelText}
        </Label>
    );
};
