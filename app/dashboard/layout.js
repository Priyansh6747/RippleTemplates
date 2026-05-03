import {
    SidebarProvider,
    SidebarInset,
} from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";

export default function DashboardLayout({ children }) {
    return (
        <SidebarProvider>
            <DashboardSidebar />
            <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
    );
}
