import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
type TModalProps = {
  isOpen: boolean | undefined;
  title: string | undefined;
  children?: React.ReactNode;
  onclose?: () => void;
};
export default function Modal({ isOpen, children, onclose, title }: TModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onclose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="py-2">{title}</DialogTitle>
          <DialogDescription>{children}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
