import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ProductType } from '@/constans';
import { Button } from '@/components/ui/button';



const ProductModal = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleClose = () => {
        setIsOpen(false);
    
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="p-2 bg-gray-600 text-white rounded">View Detail</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default ProductModal