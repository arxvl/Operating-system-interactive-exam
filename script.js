/* ============================================================
   Operating Systems - Midterm Practice Exam (100 items)
   Source: Chapters 1-4, Silberschatz/Galvin/Gagne 10th ed. lecture decks
   Fields: n (number), lec (lecture), topic, type, q, opts, a (index of
   correct option), why (explanation shown only after submission)
   ============================================================ */

const QUESTIONS = [

/* ---------- LECTURE 1: Introduction (19 items) ---------- */
{
  n: 1, lec: 1, topic: "What Operating Systems Do", type: "Concept",
  q: "Which statement best captures what an operating system is?",
  opts: [
    "A program that acts as an intermediary between a user of a computer and the computer hardware",
    "The collection of application programs, such as word processors and browsers, that a user installs",
    "The physical circuitry that provides the basic computing resources of CPU, memory and I/O",
    "A translator that converts high-level source code into machine instructions"
  ],
  a: 0,
  why: "Chapter 1 defines the OS as an intermediary between the user and the hardware, with the goals of executing user programs, making the system convenient to use, and using the hardware efficiently. Hardware and application programs are separate components of the computer system, and translation is the compiler's job."
},
{
  n: 2, lec: 1, topic: "Operating System Definition", type: "Concept",
  q: "The phrase 'the one program running at all times on the computer' refers to:",
  opts: [
    "The kernel",
    "The shell",
    "The bootstrap program stored in ROM",
    "A background daemon started at boot"
  ],
  a: 0,
  why: "The kernel is by definition the always-running part of the OS. Everything else is either a system program (ships with the OS but is not part of the kernel) or an application program. The bootstrap program runs only at start-up, and daemons can be started and stopped."
},
{
  n: 3, lec: 1, topic: "Operating System Definition", type: "Concept",
  q: "Today's general-purpose and mobile operating systems also ship with sets of software frameworks that give application developers extra services such as databases, multimedia and graphics. These frameworks are called:",
  opts: [
    "Middleware",
    "Device drivers",
    "System calls",
    "Loadable kernel modules"
  ],
  a: 0,
  why: "Middleware is the term used for software frameworks layered on top of the OS that provide additional services to application developers, such as database, multimedia and graphics support."
},
{
  n: 4, lec: 1, topic: "Computer System Structure", type: "Diagram",
  q: "In the abstract view of computer-system components, the four layers from top to bottom are users, application programs, operating system, and hardware. What is the job of the layer labelled 'operating system' in that diagram?",
  opts: [
    "It controls and coordinates the use of hardware among the various applications and users",
    "It provides the basic computing resources: CPU, memory and I/O devices",
    "It defines the ways in which system resources are used to solve users' computing problems",
    "It converts application programs into the machine code that the hardware executes"
  ],
  a: 0,
  why: "In that figure the hardware provides the basic computing resources, the application programs define how those resources are used to solve user problems, and the OS sits between them controlling and coordinating hardware use among applications and users."
},
{
  n: 5, lec: 1, topic: "Interrupts", type: "Situational",
  q: "A disk controller has just finished moving a block of data into its local buffer. How does it inform the CPU that the operation is complete?",
  opts: [
    "It causes an interrupt, which transfers control through the interrupt vector to the proper service routine",
    "It writes the data straight into the CPU registers, which signals completion",
    "It waits until the CPU polls every device controller at the end of the current time slice",
    "It issues a system call on behalf of the process that requested the I/O"
  ],
  a: 0,
  why: "A device controller signals the end of its operation by causing an interrupt. Control is transferred to the interrupt service routine through the interrupt vector, a table that contains the addresses of all the service routines, and the architecture must save the address of the interrupted instruction so execution can resume."
},
{
  n: 6, lec: 1, topic: "Interrupts", type: "Situational",
  q: "A user program executes an instruction that divides by zero and the operating system takes control. The event that transferred control to the OS is:",
  opts: [
    "An exception or trap, a software-generated interrupt caused by an error",
    "A hardware interrupt raised by a device controller",
    "A DMA transfer completing ahead of schedule",
    "A context switch triggered by the process scheduler"
  ],
  a: 0,
  why: "A trap or exception is a software-generated interrupt caused either by an error (divide by zero, invalid opcode, page fault) or by a user request such as a system call. Hardware interrupts come from external devices such as keyboards, timers and disks."
},
{
  n: 7, lec: 1, topic: "I/O Structure", type: "Situational",
  q: "A word processor accepts no further input until the printer has finished the page it was told to print. Which I/O method is being used?",
  opts: [
    "Synchronous (blocking) I/O",
    "Asynchronous (non-blocking) I/O",
    "Direct memory access",
    "Spooling"
  ],
  a: 0,
  why: "With synchronous I/O, control returns to the user program only when the I/O completes, so the program appears frozen. With asynchronous I/O control returns immediately, as when a browser lets you open new tabs while a download continues."
},
{
  n: 8, lec: 1, topic: "DMA", type: "Situational",
  q: "A high-speed device must move a 4 KB block into memory. Without DMA the controller would interrupt the CPU once per byte. What changes when DMA is used?",
  opts: [
    "The controller transfers the whole block directly into main memory without CPU intervention and generates only one interrupt per block",
    "The CPU still copies each byte, but with interrupts disabled so it is faster",
    "The device writes into the CPU cache instead of main memory, so no interrupt is needed at all",
    "The block is spooled to disk first and copied to memory during idle cycles"
  ],
  a: 0,
  why: "Direct memory access is used for high-speed devices that transmit near memory speeds. The device controller transfers blocks of data from its buffer straight to main memory without CPU intervention, and only one interrupt is generated per block rather than one per byte."
},
{
  n: 9, lec: 1, topic: "Storage Structure", type: "Concept",
  q: "Which statement about main memory is correct?",
  opts: [
    "It is the only large storage medium the CPU can access directly, it is random access, and it is typically volatile",
    "It is nonvolatile, and the CPU reaches it only through a device controller",
    "It is accessed sequentially like magnetic tape, but at much higher speed",
    "It is slower than secondary storage but offers far greater capacity"
  ],
  a: 0,
  why: "Main memory is the only large storage the CPU can address directly; it is random access and typically volatile DRAM. Secondary storage is the nonvolatile extension of main memory and is reached through a controller."
},
{
  n: 10, lec: 1, topic: "Storage Hierarchy", type: "Diagram",
  q: "Reading the storage-device hierarchy from the top (registers) downwards to magnetic tape, which trend is correct?",
  opts: [
    "Speed and cost per bit decrease while capacity increases",
    "Speed, cost per bit and capacity all increase",
    "Speed increases while capacity decreases",
    "Cost per bit increases while capacity increases"
  ],
  a: 0,
  why: "The hierarchy is organised by speed, cost and volatility. The top levels are fast, expensive per bit, small and volatile; lower levels are slower, cheaper per bit, larger and nonvolatile."
},
{
  n: 11, lec: 1, topic: "I/O Subsystem", type: "Situational",
  q: "A print server accepts the output of one job while other jobs are still supplying input, overlapping the output of one job with the input of others. This I/O subsystem technique is:",
  opts: [
    "Spooling",
    "Buffering",
    "Caching",
    "Direct memory access"
  ],
  a: 0,
  why: "In the I/O subsystem, buffering stores data temporarily while it is being transferred, caching keeps parts of data in faster storage for performance, and spooling is the overlapping of the output of one job with the input of other jobs."
},
{
  n: 12, lec: 1, topic: "Caching", type: "Situational",
  q: "On a multiprocessor system, each CPU keeps a cached copy of the same integer A while a process updates it. What must the system guarantee?",
  opts: [
    "Cache coherency, so that all CPUs see the most recent value of A in their caches",
    "That A is never cached, since caching shared data is not permitted",
    "That A is written only to the register file and never to main memory",
    "That each CPU keeps its own independent value of A until the process terminates"
  ],
  a: 0,
  why: "Multitasking environments must always use the most recent value wherever it sits in the storage hierarchy, and a multiprocessor environment must provide cache coherency in hardware so every CPU sees the latest value. Distributed environments make this harder still because several copies of a datum may exist."
},
{
  n: 13, lec: 1, topic: "Dual-mode Operation", type: "Situational",
  q: "A user application attempts to execute a privileged instruction while the mode bit is set to 'user'. What happens?",
  opts: [
    "The hardware traps to the operating system and the instruction is not executed",
    "The instruction executes, because the application currently controls the CPU",
    "The mode bit flips to kernel automatically so the instruction can complete",
    "The timer is reset and the instruction is retried in the next time slice"
  ],
  a: 0,
  why: "Dual-mode operation lets the OS protect itself. Privileged instructions are executable only in kernel mode, and a user program cannot set the mode bit itself. Only a system call switches the mode to kernel, and the return from the call resets it to user."
},
{
  n: 14, lec: 1, topic: "Timer", type: "Situational",
  q: "A buggy process enters an infinite loop and never issues a system call. Which mechanism lets the OS regain control of the CPU?",
  opts: [
    "The timer, which is set to interrupt the computer after a fixed period",
    "The interrupt vector, which detects loops in user code",
    "Direct memory access",
    "The bootstrap program"
  ],
  a: 0,
  why: "A timer is set before scheduling a process; a counter is decremented by the physical clock and an interrupt is generated when it reaches zero. Setting the counter is a privileged instruction, so the OS can always regain control or terminate a program that exceeds its allotted time."
},
{
  n: 15, lec: 1, topic: "Multiprogramming and Multitasking", type: "Concept",
  q: "What distinguishes multitasking (timesharing) from plain multiprogramming?",
  opts: [
    "The CPU switches among jobs so frequently that users can interact with each job while it is running",
    "Only multitasking keeps more than one job in memory at a time",
    "Multitasking runs each job to completion before starting the next one",
    "Multitasking requires one physical CPU per user"
  ],
  a: 0,
  why: "Multiprogramming organises jobs so the CPU always has one to execute and switches when a job waits for I/O. Timesharing is a logical extension in which switching is frequent enough for interactive computing, with response time under a second."
},
{
  n: 16, lec: 1, topic: "Process Management", type: "Concept",
  q: "Which pair of statements about programs and processes is correct?",
  opts: [
    "A program is a passive entity; a process is an active entity and is a unit of work within the system",
    "A program is an active entity; a process is the passive copy kept on disk",
    "Both are active entities, but only a program needs resources such as CPU and memory",
    "A process is a program that has finished executing and released its resources"
  ],
  a: 0,
  why: "A process is a program in execution and is the unit of work in the system. The program is passive, the process is active, and it needs resources (CPU, memory, I/O, files) that must be reclaimed when it terminates."
},
{
  n: 17, lec: 1, topic: "Computer-System Architecture", type: "Situational",
  q: "In a multiprocessor system, one processor is dedicated to handling I/O while another runs only kernel code; each processor has its own specific task. This arrangement is:",
  opts: [
    "Asymmetric multiprocessing",
    "Symmetric multiprocessing",
    "Clustered computing",
    "Non-uniform memory access"
  ],
  a: 0,
  why: "Asymmetric multiprocessing assigns each processor a specific task, whereas in symmetric multiprocessing every processor performs all tasks. The advantages of multiprocessor systems generally are increased throughput, economy of scale and increased reliability through graceful degradation."
},
{
  n: 18, lec: 1, topic: "Clustered Systems", type: "Situational",
  q: "A hospital runs its records application on one server while a second identical server sits idle, monitoring the first and ready to take over if it fails. This configuration is:",
  opts: [
    "Asymmetric clustering, with one machine in hot-standby mode",
    "Symmetric clustering, with both nodes running applications",
    "Symmetric multiprocessing within one machine",
    "Peer-to-peer computing"
  ],
  a: 0,
  why: "Asymmetric clustering keeps one machine in hot-standby mode doing nothing but monitoring the active server. Symmetric clustering has multiple nodes running applications and monitoring each other."
},
{
  n: 19, lec: 1, topic: "Cloud Computing", type: "Situational",
  q: "A startup rents raw servers and storage capacity over the Internet and installs its own operating system and software stack on them. Which cloud model is this?",
  opts: [
    "Infrastructure as a Service (IaaS)",
    "Platform as a Service (PaaS)",
    "Software as a Service (SaaS)",
    "A hybrid cloud"
  ],
  a: 0,
  why: "IaaS makes servers or storage available over the Internet, PaaS supplies a ready software stack such as a database server, and SaaS delivers finished applications such as a word processor. Hybrid describes the mix of public and private clouds, not the service layer."
},

/* ---------- LECTURE 2: Operating-System Services (25 items) ---------- */
{
  n: 20, lec: 2, topic: "OS Services", type: "Concept",
  q: "Which operating-system service is responsible for loading a program into memory, running it, and ending its execution either normally or abnormally?",
  opts: [
    "Program execution",
    "Resource allocation",
    "File-system manipulation",
    "Error detection"
  ],
  a: 0,
  why: "Program execution is the service that loads a program into memory, runs it and ends execution normally or abnormally with an error indication. Resource allocation concerns dividing CPU cycles, memory and devices among concurrent jobs."
},
{
  n: 21, lec: 2, topic: "OS Services", type: "Situational",
  q: "A photo application creates a folder, lists its contents, renames a file and changes who is allowed to read it. Which OS service is it relying on?",
  opts: [
    "File-system manipulation",
    "Program execution",
    "Communications",
    "Logging"
  ],
  a: 0,
  why: "File-system manipulation covers reading and writing files and directories, creating and deleting them, searching them, listing file information and permission management."
},
{
  n: 22, lec: 2, topic: "OS Services", type: "Concept",
  q: "Two processes on different computers exchange information across a network. According to the operating-system services discussion, this is carried out by:",
  opts: [
    "Message passing, in which packets are moved by the operating system",
    "Shared memory, because the OS maps the same physical page into both machines",
    "A context switch between the two machines",
    "The interrupt vector of the receiving host"
  ],
  a: 0,
  why: "Processes may exchange information on the same computer or between computers over a network, either via shared memory or through message passing, where the packets are moved by the OS. Shared memory is not possible across separate machines."
},
{
  n: 23, lec: 2, topic: "OS Services", type: "Situational",
  q: "A university server records how much CPU time and disk space each student account consumes so the department can plan upgrades. This OS function is:",
  opts: [
    "Logging, also called accounting",
    "Protection",
    "Resource allocation",
    "Error detection"
  ],
  a: 0,
  why: "Logging keeps track of which users use how much and what kinds of computer resources. Resource allocation is the act of handing resources out, not of recording usage."
},
{
  n: 24, lec: 2, topic: "OS Services", type: "Situational",
  q: "A running program references an illegal memory address; the OS terminates it and records the fault. Which service of the operating system is at work?",
  opts: [
    "Error detection",
    "Logging",
    "Resource allocation",
    "Program execution"
  ],
  a: 0,
  why: "Error detection means the OS is constantly aware of possible errors in the CPU and memory hardware, in I/O devices and in user programs, and takes the appropriate action for each type to ensure correct and consistent computing."
},
{
  n: 25, lec: 2, topic: "OS Services", type: "Concept",
  q: "Which statement correctly separates protection from security?",
  opts: [
    "Protection ensures all access to system resources is controlled; security defends the system from outsiders and requires user authentication",
    "Protection defends against external attacks; security controls which process may touch which resource",
    "Both terms describe the same mechanism, applied at different times",
    "Protection applies only to files, while security applies only to processes"
  ],
  a: 0,
  why: "Protection involves ensuring that all access to system resources is controlled, so concurrent processes do not interfere with each other. Security of the system from outsiders requires user authentication and extends to defending external I/O devices from invalid access attempts."
},
{
  n: 26, lec: 2, topic: "A View of OS Services", type: "Diagram",
  q: "In the figure 'A View of Operating System Services', which layer lies directly between the user interfaces and system programs above it, and the services (program execution, I/O operations, file systems, communication, resource allocation, accounting) below it?",
  opts: [
    "System calls",
    "The hardware",
    "The command interpreter",
    "The bootstrap loader"
  ],
  a: 0,
  why: "In that figure, user and other system programs sit at the top with the GUI, touch screen and command line; the system-call layer sits beneath them and above the block of OS services, which in turn sits above the hardware."
},
{
  n: 27, lec: 2, topic: "Command-Line Interpreter", type: "Concept",
  q: "In a shell where most commands are not built in but are simply the names of programs stored on disk, what advantage follows?",
  opts: [
    "Adding new features does not require modifying the shell",
    "Commands run in kernel mode, which makes them faster",
    "The shell no longer has to fetch commands from the user",
    "Only one flavour of shell can exist on the system"
  ],
  a: 0,
  why: "A CLI fetches a command from the user and executes it. When commands are just names of programs rather than built-ins, new features can be added simply by adding programs, with no change to the shell itself."
},
{
  n: 28, lec: 2, topic: "System Calls and APIs", type: "Concept",
  q: "Most application programmers call a library function such as fopen() rather than issuing the open() system call directly. Which statement explains why this is the normal arrangement?",
  opts: [
    "The API hides most details of the OS interface and is managed by a run-time support library, so the caller need only obey the API and know what the OS will do",
    "The API executes in kernel mode, so it is faster than issuing a system call",
    "System calls cannot be invoked from programs written in C",
    "The API bypasses the kernel entirely, which improves performance"
  ],
  a: 0,
  why: "Programs mostly reach OS services through a high-level API such as Win32, POSIX or the Java API rather than by direct system calls. The caller need know nothing about how the system call is implemented; the run-time support library built into the compiler's libraries handles the details."
},
{
  n: 29, lec: 2, topic: "Standard C Library", type: "Diagram",
  q: "A C program executes printf('Greetings'). Following the standard C library example, what actually happens?",
  opts: [
    "The C library intercepts the call and invokes the write() system call, then takes write()'s return value and passes it back to the user program",
    "printf() is itself a system call and is executed directly by the kernel",
    "printf() writes to the display controller without involving the kernel at all",
    "The kernel calls printf() in user mode on behalf of the program"
  ],
  a: 0,
  why: "The standard C library provides a portion of the system-call interface for UNIX and Linux. It intercepts printf(), invokes the necessary system call (write() in this case), and passes the returned value back to the user program. The user-to-kernel mode transition happens inside the library call."
},
{
  n: 30, lec: 2, topic: "Parameter Passing", type: "Situational",
  q: "A system call needs more parameters than there are available registers. Which approach do Linux and Solaris take?",
  opts: [
    "The parameters are stored in a block or table in memory, and the address of that block is passed in a register",
    "The extra parameters are silently discarded",
    "The call is broken into several smaller system calls, each with fewer parameters",
    "The kernel pushes the parameters onto the stack and the user program pops them off"
  ],
  a: 0,
  why: "Three general methods exist: registers (simplest but limited), a block or table in memory whose address is passed in a register (the approach taken by Linux and Solaris), and the stack, where the program pushes and the OS pops. Block and stack methods do not limit the number or length of parameters."
},
{
  n: 31, lec: 2, topic: "Types of System Calls", type: "Situational",
  q: "Which UNIX system call is the counterpart of the Windows CreateProcess(), and to which category of system calls does it belong?",
  opts: [
    "fork(), process control",
    "open(), file management",
    "ioctl(), device management",
    "pipe(), communications"
  ],
  a: 0,
  why: "In the Windows/UNIX comparison, process control pairs CreateProcess() with fork(), ExitProcess() with exit() and WaitForSingleObject() with wait(). File management pairs CreateFile() with open(), device management pairs SetConsoleMode() with ioctl(), and communications pairs CreatePipe() with pipe()."
},
{
  n: 32, lec: 2, topic: "Example: Arduino", type: "Situational",
  q: "An Arduino board runs a single sketch loaded into flash memory, uses a single memory space and has no operating system. What happens when the sketch finishes?",
  opts: [
    "The boot loader is reloaded and waits for a program; only one task can run at a time",
    "The scheduler dispatches the next process from the ready queue",
    "fork() is called to create the next sketch",
    "The kernel reclaims the sketch's heap and returns control to a shell"
  ],
  a: 0,
  why: "Arduino is single-tasking with no operating system. Programs (sketches) are loaded via USB into flash memory, there is a single memory space, the boot loader loads the program, and on program exit the boot loader/shell is reloaded."
},
{
  n: 33, lec: 2, topic: "Example: FreeBSD", type: "Situational",
  q: "A user logs into FreeBSD and types a command at the shell prompt. Which sequence correctly describes what the shell does?",
  opts: [
    "It executes fork() to create a process, then exec() to load the program into that process, then either waits for the process to terminate or continues accepting commands",
    "It executes exec() to create a process, then fork() to load the program into it",
    "It loads the program into its own address space and jumps to its entry point",
    "It asks the kernel to create the process directly, since the shell cannot create processes"
  ],
  a: 0,
  why: "On FreeBSD the shell executes fork() to create a process and exec() to load the program into it, then either waits for the process to terminate or continues with user commands. The process exits with code 0 for no error and a code greater than 0 for an error."
},
{
  n: 34, lec: 2, topic: "System Services", type: "Concept",
  q: "Programs that launch at boot time, provide facilities such as disk checking, process scheduling, error logging and printing, and run in user context rather than kernel context, are known as:",
  opts: [
    "Services, subsystems or daemons",
    "Device drivers",
    "Loadable kernel modules",
    "Interrupt service routines"
  ],
  a: 0,
  why: "Background services launch at boot; some run only during system startup and then terminate, while others run from boot to shutdown. They run in user context, not kernel context, and are known as services, subsystems or daemons."
},
{
  n: 35, lec: 2, topic: "Linkers and Loaders", type: "Concept",
  q: "What is the difference between the linker and the loader?",
  opts: [
    "The linker combines relocatable object files and libraries into a single binary executable; the loader brings that executable into memory so it can run",
    "The loader combines object files into an executable; the linker copies the executable into memory",
    "The linker assigns final addresses at run time, while the loader compiles source into object code",
    "Both run at compile time; the linker handles code and the loader handles data"
  ],
  a: 0,
  why: "Source code is compiled into relocatable object files that can be loaded at any physical address. The linker combines these, plus libraries, into one binary executable stored on secondary storage. The loader brings it into memory, and relocation assigns final addresses and adjusts the code and data to match."
},
{
  n: 36, lec: 2, topic: "Role of Linker and Loader", type: "Diagram",
  q: "In the diagram showing the role of the linker and the loader, which command corresponds to the linker step?",
  opts: [
    "gcc -o main main.o -lm",
    "gcc -c main.c",
    "./main",
    "The shell's fork() call"
  ],
  a: 0,
  why: "In that figure, gcc -c main.c compiles the source into the object file main.o, gcc -o main main.o -lm links the object file with other object files and the math library to generate the executable main, and ./main invokes the loader, which brings the program into memory and binds dynamically linked libraries."
},
{
  n: 37, lec: 2, topic: "Dynamic Linking", type: "Concept",
  q: "Modern general-purpose systems usually do not bind library code into executables at link time. What do they do instead?",
  opts: [
    "Dynamically linked libraries are loaded as needed and shared by every program using the same version of that library, so the library is loaded once",
    "Every process receives its own private copy of every library, loaded at boot time",
    "Library routines are stored inside the kernel and invoked only through system calls",
    "Library code is interpreted at run time rather than executed natively"
  ],
  a: 0,
  why: "Modern systems use dynamically linked libraries (DLLs on Windows) that are loaded as needed and shared by all programs using the same version of the same library, so only one copy is loaded."
},
{
  n: 38, lec: 2, topic: "OS-Specific Applications", type: "Concept",
  q: "An application compiled on Linux usually will not run on Windows. Which option gives the correct reason together with the correct name for the architecture-level equivalent of an API?",
  opts: [
    "Each operating system provides its own unique system calls and file formats; the binary-level interface is the Application Binary Interface (ABI)",
    "Each operating system provides its own unique system calls; the binary-level interface is also called the API",
    "The CPUs are incompatible; the interface involved is the interrupt vector",
    "The DLL versions differ; the interface involved is middleware"
  ],
  a: 0,
  why: "Apps compiled on one system are usually not executable on another because each OS has its own system calls and file formats. The ABI is the architecture equivalent of an API, defining how components of binary code interface for a given OS on a given architecture. Apps can be multi-OS if they are interpreted, run in a VM such as Java, or are recompiled from a standard language such as C."
},
{
  n: 39, lec: 2, topic: "Policy and Mechanism", type: "Concept",
  q: "A system uses a timer to generate interrupts, and a setting specifies that an interrupt should occur every 100 seconds; later the setting is changed to 200 seconds. Which statement is correct?",
  opts: [
    "The timer is the mechanism (how) and the interval is the policy (what); separating them gives maximum flexibility when policy decisions change",
    "The timer is the policy and the interval is the mechanism",
    "Both the timer and the interval are mechanisms, since both are implemented in hardware",
    "Both the timer and the interval are policies, since both can be changed"
  ],
  a: 0,
  why: "Policy decides what needs to be done (interrupt every 100 seconds) and mechanism decides how to do it (a timer). Separating policy from mechanism is an important design principle because it allows the policy, such as changing 100 to 200, to be changed later without redesigning the mechanism."
},
{
  n: 40, lec: 2, topic: "Monolithic Structure", type: "Concept",
  q: "In the original monolithic UNIX structure, the kernel consists of:",
  opts: [
    "Everything below the system-call interface and above the physical hardware",
    "Only the system programs such as shells, compilers and libraries",
    "Only the device drivers and interrupt handlers",
    "Only the modules that can be loaded and unloaded at run time"
  ],
  a: 0,
  why: "The original UNIX OS has two separable parts: systems programs, and the kernel. The kernel is everything below the system-call interface and above the physical hardware, providing the file system, CPU scheduling, memory management and other functions - a large number of functions for one level."
},
{
  n: 41, lec: 2, topic: "Microkernels", type: "Diagram",
  q: "In the microkernel system-structure diagram, which set of components remains in kernel mode?",
  opts: [
    "Interprocess communication, memory management and CPU scheduling",
    "The file system and the device drivers",
    "The application program and the file system",
    "All operating-system services, since the microkernel keeps everything together"
  ],
  a: 0,
  why: "The microkernel approach moves as much as possible from the kernel into user space. In the figure, the application program, file system and device driver run in user mode and exchange messages, while interprocess communication, memory management and CPU scheduling remain in the microkernel in kernel mode."
},
{
  n: 42, lec: 2, topic: "Microkernels", type: "Concept",
  q: "Which is the main drawback of the microkernel approach?",
  opts: [
    "Performance overhead of user space to kernel space communication",
    "It is harder to port to new architectures than a monolithic kernel",
    "More code runs in kernel mode, so the system is less reliable",
    "Once built, a microkernel cannot be extended"
  ],
  a: 0,
  why: "Microkernels are easier to extend and to port, and are more reliable and secure because less code runs in kernel mode. Their detriment is the performance overhead of communication between user space and kernel space, since services interact by message passing."
},
{
  n: 43, lec: 2, topic: "Modules and Hybrid Systems", type: "Concept",
  q: "Which description of modern operating-system structure is correct?",
  opts: [
    "Linux keeps the kernel in a single address space, so it is monolithic, but it is also modular, using loadable kernel modules to add functionality dynamically",
    "Linux is a pure microkernel in which the file system runs entirely in user space",
    "Windows is a pure layered system with no monolithic component",
    "macOS uses only the Mach microkernel and contains no BSD UNIX parts"
  ],
  a: 0,
  why: "Most modern systems are hybrids. Linux and Solaris keep the kernel in kernel address space, so they are monolithic, plus modular for dynamic loading of functionality. Windows is mostly monolithic plus a microkernel for different subsystem personalities, and macOS layers Aqua and Cocoa over a kernel built from the Mach microkernel and BSD UNIX parts with loadable kernel extensions."
},
{
  n: 44, lec: 2, topic: "System Boot", type: "Situational",
  q: "A computer is switched on. Which sequence correctly describes what happens next?",
  opts: [
    "Execution starts at a fixed memory location; a bootstrap loader in ROM or EEPROM locates the kernel, loads it into memory and starts it, after which the system is running",
    "The kernel starts first and then loads the bootstrap program from disk",
    "The shell starts first and asks the user which kernel to load into ROM",
    "The loader links the kernel's object files together before any code runs"
  ],
  a: 0,
  why: "When power is initialised, execution starts at a fixed memory location. A small piece of code - the bootstrap loader or BIOS, stored in ROM or EEPROM - locates the kernel, loads it into memory and starts it. Modern systems replace BIOS with UEFI, and a boot loader such as GRUB allows selection among kernels, versions and boot states such as single-user mode."
},

/* ---------- LECTURE 3: Processes (28 items) ---------- */
{
  n: 45, lec: 3, topic: "Process Concept", type: "Concept",
  q: "Three students on a shared Linux server each start the same text editor binary at the same time. Which statement is correct?",
  opts: [
    "There is one program but three processes, because a program becomes a process when its executable is loaded into memory",
    "There is one process shared by three users, since the executable file is the same",
    "There are three programs and one process, because the kernel merges identical executables",
    "There are three processes only if the editor was started from the command line rather than a GUI"
  ],
  a: 0,
  why: "A program is a passive entity stored on disk; it becomes a process when loaded into memory. One program can be several processes, as when multiple users execute the same program. How it was started (GUI click or command line) does not matter."
},
{
  n: 46, lec: 3, topic: "Process in Memory", type: "Diagram",
  q: "In the 'process in memory' diagram, which section holds memory that is allocated dynamically while the program is running?",
  opts: [
    "The heap",
    "The stack",
    "The text section",
    "The data section"
  ],
  a: 0,
  why: "The process layout has a text section (program code), a data section (global variables), a heap for memory dynamically allocated at run time, and a stack for temporary data such as function parameters, return addresses and local variables."
},
{
  n: 47, lec: 3, topic: "Memory Layout of a C Program", type: "Situational",
  q: "A C program declares int total = 0; outside of any function, and inside main() it declares int i; and calls malloc(). Where do total, i, and the malloc'd block live?",
  opts: [
    "total in the data section, i on the stack, the malloc'd block on the heap",
    "total on the heap, i in the data section, the malloc'd block on the stack",
    "total and i both on the stack, the malloc'd block in the text section",
    "All three in the data section, since they belong to the same process"
  ],
  a: 0,
  why: "Global variables go in the data section, local variables and function parameters go on the stack, and memory obtained at run time through malloc() comes from the heap. The text section holds the program code."
},
{
  n: 48, lec: 3, topic: "Process State", type: "Diagram",
  q: "In the process state diagram, which transition is labelled 'I/O or event wait'?",
  opts: [
    "Running to waiting",
    "Running to ready",
    "Ready to running",
    "Waiting to ready"
  ],
  a: 0,
  why: "In the diagram, new to ready is admitted, ready to running is scheduler dispatch, running to ready is interrupt, running to waiting is I/O or event wait, waiting to ready is I/O or event completion, and running to terminated is exit."
},
{
  n: 49, lec: 3, topic: "Process State", type: "Situational",
  q: "A process is executing instructions when its time slice expires and the scheduler takes the CPU away to give it to another process. What state does it move to?",
  opts: [
    "Ready, because it is still able to run and is only waiting for a processor",
    "Waiting, because it has been stopped by the operating system",
    "Terminated, because it did not finish within its time slice",
    "New, because it must be re-created before it can run again"
  ],
  a: 0,
  why: "Ready means the process is waiting to be assigned to a processor; waiting means it is blocked until some event occurs. A preempted process has nothing to wait for except the CPU, so it goes to the ready state."
},
{
  n: 50, lec: 3, topic: "Process State", type: "Situational",
  q: "A process issues a read from disk and cannot continue until the data arrives. Which sequence of states does it follow?",
  opts: [
    "Running to waiting while the I/O is in progress, then waiting to ready when the I/O completes, then ready to running when the scheduler dispatches it",
    "Running to ready during the I/O, then ready to running when the I/O completes",
    "Running to waiting, then waiting straight back to running as soon as the I/O completes",
    "Running to terminated, since a blocked process must be re-created"
  ],
  a: 0,
  why: "The process blocks into the waiting state and joins a wait queue. When the event completes it becomes ready again, but it must wait for the scheduler to dispatch it before it runs; there is no direct transition from waiting to running."
},
{
  n: 51, lec: 3, topic: "Process Control Block", type: "Concept",
  q: "Which item is NOT part of the information kept in a Process Control Block?",
  opts: [
    "The source code of the program being executed",
    "The program counter and the contents of the CPU registers",
    "CPU scheduling information such as priorities and queue pointers",
    "I/O status information such as allocated devices and the list of open files"
  ],
  a: 0,
  why: "The PCB (task control block) holds process state, program counter, CPU registers, CPU scheduling information, memory-management information, accounting information and I/O status information. Source code is not kept by the kernel; the compiled text section is part of the process image, not of the PCB."
},
{
  n: 52, lec: 3, topic: "Context Switch", type: "Situational",
  q: "A system administrator notices that a server spends a large share of its time switching between processes. Which statement about context-switch time is correct?",
  opts: [
    "It is pure overhead, because the system does no useful work while switching, and it grows as the OS and PCB become more complex",
    "It is useful work, because the kernel executes process instructions during the switch",
    "It is constant on every machine, since it depends only on the number of processes",
    "It can be eliminated entirely by increasing the size of the ready queue"
  ],
  a: 0,
  why: "Context-switch time is pure overhead: the system does no useful work while switching. The more complex the OS and the PCB, the longer the switch. Time also depends on hardware support, since some processors provide multiple register sets so several contexts can be loaded at once."
},
{
  n: 53, lec: 3, topic: "CPU Switch From Process to Process", type: "Diagram",
  q: "In the diagram of a CPU switch from process P0 to process P1, what is the correct order of operations?",
  opts: [
    "Save the state of P0 into PCB0, then reload the state of P1 from PCB1",
    "Reload the state of P1 from PCB1, then save the state of P0 into PCB0",
    "Save the state of P0 into PCB1, then reload P1 from PCB0",
    "Discard the state of P0 and load P1 from the executable file on disk"
  ],
  a: 0,
  why: "A context switch means the system saves the state of the old process into its PCB and loads the saved state of the new process from its PCB. In the figure, P0 is idle while its state is saved and while P1 executes, and the reverse happens on the way back."
},
{
  n: 54, lec: 3, topic: "Process Scheduling", type: "Concept",
  q: "Which statement about scheduling queues is correct?",
  opts: [
    "The ready queue holds processes in main memory that are ready and waiting to execute, while wait queues hold processes waiting for an event such as I/O",
    "The ready queue holds processes waiting for I/O, while wait queues hold processes ready to run",
    "Processes are assigned to one queue when created and never migrate between queues",
    "Both queues hold only processes that have been swapped out to disk"
  ],
  a: 0,
  why: "The process scheduler selects among available processes for execution on a CPU core, aiming to maximise CPU use. It maintains a ready queue of processes residing in main memory ready to execute, and wait queues of processes waiting for an event. Processes migrate among the queues as they run, block and are preempted."
},
{
  n: 55, lec: 3, topic: "Multitasking in Mobile Systems", type: "Situational",
  q: "An Android music app must keep playing audio after the user switches to another app, while on early iOS versions only one process could run at a time. Which statement reflects how these systems handle it?",
  opts: [
    "Android lets a background process use a service, which has no user interface and small memory use and can keep running even when the background process is suspended",
    "Android suspends every process that is not in the foreground, with no exceptions",
    "iOS always ran unlimited background processes, which is why it needed services",
    "Both systems require the user to keep the app in the foreground for audio to continue"
  ],
  a: 0,
  why: "Because of screen real estate and user-interface limits, iOS provides a single foreground process and multiple background processes with limits such as short tasks, event notifications and specific long-running tasks like audio playback. Android runs foreground and background with fewer limits, and a background process uses a service, which has no user interface, uses little memory, and can keep running even if the background process is suspended."
},
{
  n: 56, lec: 3, topic: "Process Creation (fork)", type: "Situational",
  q: "A C program executes pid_t pid = fork(); and then tests the value of pid. In the child process, what value does pid hold?",
  opts: [
    "0",
    "The process identifier of the child",
    "The process identifier of the parent",
    "A negative value"
  ],
  a: 0,
  why: "fork() creates a new process and returns 0 to the child, the child's PID to the parent, and a negative value if the call fails. That difference in return value is what lets the same code take different paths in parent and child."
},
{
  n: 57, lec: 3, topic: "Process Creation (fork)", type: "Situational",
  q: "A program calls fork() twice in sequence, with no exec() and no exit() in between, and no branch on the return value. Counting the original, how many processes exist when both calls have completed?",
  opts: [
    "4",
    "2",
    "3",
    "8"
  ],
  a: 0,
  why: "The first fork() produces 2 processes. Both of them then execute the second fork(), and each produces one child, giving 4 processes in total. Because the child is a duplicate of the parent, it continues executing at the instruction after the fork()."
},
{
  n: 58, lec: 3, topic: "Process Creation (exec)", type: "Situational",
  q: "A shell forks a child and the child immediately calls exec() with the path to /bin/ls. What happens to the child?",
  opts: [
    "Its memory space is replaced by the new program, so it no longer runs the shell's code",
    "It runs ls in a brand-new process while continuing to run the shell's code in parallel",
    "It returns to the shell's code after ls finishes, because exec() returns on success",
    "It becomes the parent of the shell, since exec() reverses the parent-child relationship"
  ],
  a: 0,
  why: "fork() creates the new process as a duplicate of the parent; exec() is used after fork() to replace the process's memory space with a new program. A successful exec() does not return, because the code that called it no longer exists in that process."
},
{
  n: 59, lec: 3, topic: "wait()", type: "Situational",
  q: "A parent process executes pid = wait(&status); immediately after forking a child. What is the effect?",
  opts: [
    "The parent blocks until a child terminates, and then receives the terminated child's pid and its status information",
    "The parent terminates the child and then continues executing",
    "The parent and the child both pause until the user resumes them",
    "The parent copies the child's address space into its own so it can read the result"
  ],
  a: 0,
  why: "A parent may wait for a child to terminate using wait(). The call returns status information, passed by the child through exit(), and the pid of the terminated process. Among the execution options for process creation, this is the case in which the parent waits until its children terminate."
},
{
  n: 60, lec: 3, topic: "Process Termination", type: "Situational",
  q: "A server program forks hundreds of short-lived children but never calls wait(). The children finish quickly, yet the process table fills with entries for them. These finished children are:",
  opts: [
    "Zombies, because they have terminated but no parent has collected their status",
    "Orphans, because their parent is still running",
    "Daemons, because they run in the background",
    "Suspended, because wait() would have resumed them"
  ],
  a: 0,
  why: "A terminated process whose parent has not invoked wait() is a zombie. By contrast, if the parent terminates without invoking wait(), the still-running child becomes an orphan."
},
{
  n: 61, lec: 3, topic: "Process Termination", type: "Situational",
  q: "On an operating system that does not allow a child to exist after its parent has terminated, a user kills a parent process that has children and grandchildren. What happens, and who starts it?",
  opts: [
    "Cascading termination: all children, grandchildren and so on are terminated, and the termination is initiated by the operating system",
    "Cascading termination: the children terminate themselves voluntarily by calling exit()",
    "Nothing: the children become orphans and keep running until they finish",
    "The grandchildren are re-parented to the shell and only the direct children are killed"
  ],
  a: 0,
  why: "Some operating systems do not allow a child to exist if its parent has terminated. In that case, if a process terminates, all its children must also be terminated, a cascading termination in which all children, grandchildren and so on are killed, initiated by the operating system."
},
{
  n: 62, lec: 3, topic: "Multiprocess Architecture", type: "Situational",
  q: "A page on one tab of Google Chrome crashes, yet the browser and the other tabs keep working. Which design decision explains this?",
  opts: [
    "Chrome creates a separate renderer process for each website, running in a sandbox that restricts disk and network I/O",
    "Chrome runs every website in one renderer thread, which is restarted automatically after a crash",
    "Chrome runs the entire browser as a single process, which recovers quickly from faults",
    "Chrome runs each website in a plug-in process, which cannot crash by design"
  ],
  a: 0,
  why: "Many browsers ran as a single process, so one misbehaving site could hang or crash the whole browser. Chrome uses three types of process: a browser process for the user interface and disk and network I/O, a renderer process created for each website opened and run in a sandbox that restricts disk and network I/O, and a plug-in process for each type of plug-in."
},
{
  n: 63, lec: 3, topic: "Communications Models", type: "Diagram",
  q: "Comparing the two interprocess-communication diagrams, shared memory (a) and message passing (b), which statement is correct?",
  opts: [
    "In message passing every exchange goes through the kernel, while in shared memory the processes read and write a common region directly after it is established",
    "In shared memory every exchange goes through the kernel, while message passing is handled entirely in user space",
    "Both models route every byte through the kernel, so they perform identically",
    "Neither model involves the kernel, since both are implemented by the C library"
  ],
  a: 0,
  why: "In the shared-memory model the processes attach a shared region and then communicate by reading and writing it directly, under the control of the user processes. In the message-passing model the kernel carries each message between the processes, which is why the figure shows message traffic passing through the kernel."
},
{
  n: 64, lec: 3, topic: "IPC - Shared Memory", type: "Concept",
  q: "Two cooperating processes communicate through a shared memory region. Who is responsible for making sure they do not interfere when accessing it at the same time?",
  opts: [
    "The user processes, which must synchronise their own actions; the communication is not under the control of the operating system",
    "The operating system, which automatically serialises every access to shared memory",
    "The hardware, which locks the memory bus for the duration of each process",
    "The compiler, which inserts locks around every shared variable"
  ],
  a: 0,
  why: "In shared memory, an area of memory is shared among the communicating processes, and the communication is under the control of the user processes, not the operating system. The major issue is providing a mechanism that allows the user processes to synchronise their actions when they access shared memory."
},
{
  n: 65, lec: 3, topic: "Producer-Consumer", type: "Situational",
  q: "A bounded buffer is declared with #define BUFFER_SIZE 10 and uses the in and out indices with the test while (((in + 1) % BUFFER_SIZE) == out). How many items can the buffer actually hold, and why?",
  opts: [
    "Nine, because one slot must stay empty so that a full buffer can be distinguished from an empty one",
    "Ten, because all slots are usable and in never catches up with out",
    "Five, because the producer and consumer each own half of the buffer",
    "Eleven, because the extra slot is reserved for the item currently being produced"
  ],
  a: 0,
  why: "The shared-memory solution to the bounded-buffer problem is correct but can only use BUFFER_SIZE - 1 elements. With in == out meaning empty, the producer must stop one slot early, otherwise a completely full buffer would look identical to an empty one."
},
{
  n: 66, lec: 3, topic: "Producer-Consumer", type: "Situational",
  q: "A producer and a consumer share an unbounded buffer. Which statement describes their waiting behaviour?",
  opts: [
    "The producer never waits; the consumer waits when there is nothing to consume",
    "The producer waits when the buffer is full; the consumer never waits",
    "Both wait whenever the other is running",
    "Neither ever waits, because the buffer size is unlimited"
  ],
  a: 0,
  why: "With an unbounded buffer there is no practical limit on size, so the producer never waits, but the consumer still waits if there is nothing to consume. With a bounded buffer the producer must also wait when all buffers are full."
},
{
  n: 67, lec: 3, topic: "Race Condition", type: "Situational",
  q: "A shared variable counter equals 5. The producer executes counter++ and the consumer executes counter-- as three machine instructions each, and they interleave as: producer loads 5 into register1; producer computes 6; consumer loads 5 into register2; consumer computes 4; producer stores register1; consumer stores register2. What is the final value of counter, and what is the problem called?",
  opts: [
    "4, and the problem is a race condition",
    "5, and the problem is a deadlock",
    "6, and the problem is a context switch",
    "7, and the problem is starvation"
  ],
  a: 0,
  why: "The producer's store writes 6 and the consumer's store then overwrites it with 4, so counter ends at 4 even though one increment and one decrement should have left it at 5. The outcome depends on the interleaving of instructions on shared data, which is the definition of a race condition."
},
{
  n: 68, lec: 3, topic: "Message Passing - Synchronization", type: "Situational",
  q: "Process P uses a blocking send and process Q uses a blocking receive. What is this combination called, and what happens?",
  opts: [
    "A rendezvous: the sender is blocked until the message is received, and the receiver is blocked until a message is available",
    "Asynchronous messaging: both continue immediately after issuing their calls",
    "Indirect communication: both must share a mailbox before the transfer can occur",
    "Buffered messaging: the message is queued and both continue without blocking"
  ],
  a: 0,
  why: "Blocking is considered synchronous: a blocking send blocks the sender until the message is received, and a blocking receive blocks the receiver until a message is available. When both send and receive are blocking we have a rendezvous. Non-blocking calls are asynchronous and the sender or receiver continues immediately."
},
{
  n: 69, lec: 3, topic: "Buffering", type: "Situational",
  q: "A communication link is implemented with zero capacity. What does this mean for the sender?",
  opts: [
    "No messages are queued on the link, so the sender must wait for the receiver, which is a rendezvous",
    "The sender never waits, because messages are discarded if no receiver is ready",
    "The sender waits only when the link already holds n messages",
    "The sender queues an unlimited number of messages and continues immediately"
  ],
  a: 0,
  why: "Of the three buffering schemes, zero capacity queues no messages and forces the sender to wait for the receiver (rendezvous); bounded capacity holds a finite number of n messages and the sender waits only if the link is full; unbounded capacity has infinite length and the sender never waits."
},
{
  n: 70, lec: 3, topic: "Direct and Indirect Communication", type: "Concept",
  q: "Which statement correctly contrasts direct and indirect communication in message passing?",
  opts: [
    "In direct communication processes name each other explicitly and exactly one link exists per pair; in indirect communication messages go to mailboxes, and a link may be associated with many processes",
    "In direct communication messages go to mailboxes shared by many processes; in indirect communication processes name each other explicitly",
    "In both schemes a link may be shared by any number of processes, so they differ only in message size",
    "Direct communication requires shared memory, while indirect communication requires a network"
  ],
  a: 0,
  why: "Direct communication uses send(P, message) and receive(Q, message), links are established automatically, each link is associated with exactly one pair of processes, and there is exactly one link per pair. Indirect communication sends to mailboxes or ports: processes must share a mailbox, a link may be associated with many processes, and a pair may share several links."
},
{
  n: 71, lec: 3, topic: "Pipes", type: "Situational",
  q: "A parent process creates a pipe and then forks a child so the child can send its output to the parent. Which statement about ordinary pipes is correct?",
  opts: [
    "Ordinary pipes are unidirectional, with a producer writing to the write-end and a consumer reading from the read-end, and they require a parent-child relationship",
    "Ordinary pipes are bidirectional and can be used by any two unrelated processes",
    "Ordinary pipes can be accessed by name from outside the process that created them",
    "Ordinary pipes work over a network, which is why they are used by client-server systems"
  ],
  a: 0,
  why: "Ordinary pipes allow communication in standard producer-consumer style: the producer writes to the write-end, the consumer reads from the read-end, they are unidirectional, they require a parent-child relationship, and they cannot be accessed from outside the process that created them. Windows calls them anonymous pipes."
},
{
  n: 72, lec: 3, topic: "Pipes", type: "Situational",
  q: "Two programs written by different teams, started independently and with no parent-child relationship, must exchange data in both directions on the same machine. Which mechanism fits?",
  opts: [
    "A named pipe, which is bidirectional, needs no parent-child relationship and can be used by several processes",
    "An ordinary pipe, which can be opened by name once both processes are running",
    "A shared register set in the CPU",
    "An interrupt vector entry reserved for the two processes"
  ],
  a: 0,
  why: "Named pipes are more powerful than ordinary pipes: communication is bidirectional, no parent-child relationship is necessary, several processes can use the same named pipe, and they are available on both UNIX and Windows."
},
{
  n: 73, lec: 3, topic: "Sockets", type: "Situational",
  q: "A client contacts a web server at 161.25.19.8:1625. Which statement about this socket is correct?",
  opts: [
    "A socket is an endpoint for communication formed by concatenating an IP address and a port; communication consists of a pair of sockets, and ports below 1024 are well known and reserved for standard services",
    "161.25.19.8 is the port and 1625 is the host address, and any port number may be used for standard services",
    "A single socket is enough for the exchange, since the server replies through the same endpoint the client used",
    "127.0.0.1 would have to be used here, because all socket communication passes through the loopback address"
  ],
  a: 0,
  why: "A socket is an endpoint for communication, written as the concatenation of IP address and port, so 161.25.19.8:1625 means port 1625 on host 161.25.19.8. Communication consists of a pair of sockets, ports below 1024 are well known and used for standard services, and 127.0.0.1 is the special loopback address referring to the system on which the process is running."
},

/* ---------- LECTURE 4: Threads and Concurrency (27 items) ---------- */
{
  n: 74, lec: 4, topic: "Single and Multithreaded Processes", type: "Diagram",
  q: "In the diagram comparing a single-threaded and a multithreaded process, which items are drawn once and shared by all threads of the process?",
  opts: [
    "Code, data and files",
    "Registers, stack and program counter",
    "Stack and files only",
    "Program counter and data only"
  ],
  a: 0,
  why: "In that figure, the multithreaded process shows one shared row of code, data and files, and then a separate column of registers, stack and program counter for each thread. Threads share the resources of the process but keep their own execution state."
},
{
  n: 75, lec: 4, topic: "Threads", type: "Situational",
  q: "A programmer stores a temporary result in a local variable inside a function that several threads of the same process execute at the same time. Why does each thread see its own copy?",
  opts: [
    "Because each thread has its own stack, and local variables live on the stack",
    "Because the kernel copies the data section for every thread at creation time",
    "Because local variables are placed in thread-local storage automatically by the compiler",
    "Because threads do not share any memory with each other"
  ],
  a: 0,
  why: "Each thread has its own registers, stack and program counter, while code, data and open files are shared. Local variables sit on the per-thread stack, so each thread has a private copy, and that is also why global and heap data must be synchronised."
},
{
  n: 76, lec: 4, topic: "Motivation", type: "Situational",
  q: "A word processor freezes while it fetches a large file from the network, and the user cannot type. Which benefit of multithreading addresses this directly?",
  opts: [
    "Responsiveness, since execution may continue if part of the process is blocked, which matters most for user interfaces",
    "Economy, since threads are cheaper to create than processes",
    "Scalability, since the process can use multiple cores",
    "Resource sharing, since threads share the resources of the process"
  ],
  a: 0,
  why: "Responsiveness may allow continued execution if part of a process is blocked, which is especially important for user interfaces. Separate threads can update the display, fetch data, spell check and answer network requests, so one blocked task does not freeze the application."
},
{
  n: 77, lec: 4, topic: "Multithreaded Server Architecture", type: "Diagram",
  q: "In the multithreaded server architecture diagram, what does the server do in step (3), after it creates a new thread to service the client's request?",
  opts: [
    "It resumes listening for additional client requests",
    "It waits for the new thread to finish before accepting anything else",
    "It terminates and lets the new thread take over the listening socket",
    "It copies its entire address space into the new thread"
  ],
  a: 0,
  why: "In the figure the client sends a request (1), the server creates a new thread to service that request (2), and the server resumes listening for additional client requests (3). That is what makes a multithreaded server able to handle many clients at once."
},
{
  n: 78, lec: 4, topic: "Benefits", type: "Concept",
  q: "Which statement best expresses the 'economy' benefit of threads?",
  opts: [
    "Thread creation is cheaper than process creation, and switching between threads has lower overhead than a context switch between processes",
    "Threads use less disk space because they do not need their own executable file",
    "Threads remove the need for the operating system to schedule at all",
    "Threads reduce the number of cores a program needs in order to run"
  ],
  a: 0,
  why: "Process creation is heavy-weight while thread creation is light-weight. Economy means threads are cheaper than process creation and that thread switching has lower overhead than a context switch, because threads share the resources of their process."
},
{
  n: 79, lec: 4, topic: "Concurrency vs Parallelism", type: "Diagram",
  q: "One diagram shows T1, T2, T3, T4 interleaved on a single core over time; another shows T1 and T3 on core 1 while T2 and T4 run on core 2. What do these two figures illustrate?",
  opts: [
    "The first shows concurrency, where more than one task makes progress; the second shows parallelism, where more than one task runs simultaneously",
    "The first shows parallelism and the second shows concurrency",
    "Both show parallelism, since in each case four threads are involved",
    "Both show concurrency, since neither can run tasks at the same instant"
  ],
  a: 0,
  why: "Concurrency supports more than one task making progress, and a single processor with a scheduler can provide it by interleaving. Parallelism implies a system can perform more than one task simultaneously, which requires more than one core."
},
{
  n: 80, lec: 4, topic: "Data and Task Parallelism", type: "Situational",
  q: "A program must sum an array of one million elements. It splits the array into four equal chunks and gives one chunk to each core, with every core running the same summing routine. Which type of parallelism is this?",
  opts: [
    "Data parallelism",
    "Task parallelism",
    "Concurrency without parallelism",
    "Instruction-level parallelism"
  ],
  a: 0,
  why: "Data parallelism distributes subsets of the same data across multiple cores, performing the same operation on each. Task parallelism distributes threads across cores with each thread performing a unique operation, for example one thread compressing while another encrypts the same data."
},
{
  n: 81, lec: 4, topic: "Amdahl's Law", type: "Situational",
  q: "An application is 75 percent parallel and 25 percent serial. According to Amdahl's law, what speedup results from moving from one core to two cores?",
  opts: [
    "About 1.6 times",
    "Exactly 2 times",
    "About 1.25 times",
    "About 4 times"
  ],
  a: 0,
  why: "Amdahl's law gives speedup <= 1 / (S + (1 - S)/N). With S = 0.25 and N = 2, that is 1 / (0.25 + 0.375) = 1 / 0.625 = 1.6. The serial portion has a disproportionate effect on the gain from extra cores."
},
{
  n: 82, lec: 4, topic: "Amdahl's Law", type: "Situational",
  q: "A team keeps adding cores to a program whose serial portion is 40 percent. As the number of cores grows very large, the speedup approaches:",
  opts: [
    "2.5 times",
    "40 times",
    "Unbounded growth, since the parallel part keeps shrinking",
    "0.4 times"
  ],
  a: 0,
  why: "As N approaches infinity, the term (1 - S)/N vanishes and the speedup approaches 1/S. With S = 0.4 the ceiling is 1/0.4 = 2.5, no matter how many cores are added."
},
{
  n: 83, lec: 4, topic: "User and Kernel Threads", type: "Concept",
  q: "Which statement about user threads and kernel threads is correct?",
  opts: [
    "User threads are managed by a user-level thread library such as Pthreads, Windows threads or Java threads, while kernel threads are supported by the kernel itself",
    "User threads are supported by the kernel, while kernel threads are created by libraries",
    "Only user threads exist on modern systems; kernel threads were replaced by processes",
    "Kernel threads are managed by the compiler at link time"
  ],
  a: 0,
  why: "User threads are managed by a user-level threads library, and the three primary thread libraries are POSIX Pthreads, Windows threads and Java threads. Kernel threads are supported by the kernel and exist in virtually all general-purpose operating systems. A relationship must exist between the two."
},
{
  n: 84, lec: 4, topic: "Many-to-One Model", type: "Situational",
  q: "An application uses a threading package that maps many user-level threads onto a single kernel thread. One thread issues a blocking system call. What happens, and why can the other threads not use the other cores?",
  opts: [
    "The entire process blocks, and the threads cannot run in parallel because only one of them may be in the kernel at a time",
    "Only the calling thread blocks, and the others continue on the remaining cores",
    "The kernel creates extra kernel threads on demand, so nothing blocks",
    "The process is terminated, because blocking calls are not allowed in this model"
  ],
  a: 0,
  why: "In the many-to-one model, many user-level threads map to a single kernel thread. One thread blocking in the kernel blocks the entire process, and multiple threads cannot run in parallel on a multicore system because only one may be in the kernel at a time. Few systems still use it; examples are Solaris Green Threads and GNU Portable Threads."
},
{
  n: 85, lec: 4, topic: "One-to-One Model", type: "Concept",
  q: "Which statement describes the one-to-one threading model used by Windows and Linux?",
  opts: [
    "Each user-level thread maps to a kernel thread, which gives more concurrency but means creating a user thread requires creating a kernel thread, so the number per process is sometimes restricted",
    "Many user threads share one kernel thread, which keeps creation cheap but prevents parallelism",
    "User threads are bound to lightweight processes, which the kernel multiplexes freely",
    "Threads are scheduled entirely in user space, so the kernel is unaware of them"
  ],
  a: 0,
  why: "In the one-to-one model each user-level thread maps to a kernel thread, giving more concurrency than many-to-one and allowing threads to run in parallel on multiple processors. The cost is that creating a user thread requires creating a kernel thread, so the number of threads per process is sometimes restricted because of overhead."
},
{
  n: 86, lec: 4, topic: "Many-to-Many Model", type: "Situational",
  q: "A design team wants an application that can create as many user threads as it likes without creating a kernel thread for each one, and still wants another thread to run when one makes a blocking system call. Which model fits?",
  opts: [
    "Many-to-many, which multiplexes many user threads onto a sufficient number of kernel threads",
    "Many-to-one, since the kernel can schedule around the blocked thread",
    "One-to-one, since the number of threads is unrestricted in that model",
    "No model allows this; blocking calls always suspend the whole process"
  ],
  a: 0,
  why: "The many-to-many model allows many user-level threads to be mapped to many kernel threads and allows the OS to create a sufficient number of kernel threads. When a thread performs a blocking system call, the kernel can schedule another thread for execution. It is otherwise not very common."
},
{
  n: 87, lec: 4, topic: "Two-level Model", type: "Concept",
  q: "The two-level model differs from the many-to-many model in which respect?",
  opts: [
    "It also allows a user thread to be bound to a specific kernel thread",
    "It allows only one kernel thread for the whole process",
    "It removes the need for kernel threads entirely",
    "It prevents any user thread from making a blocking system call"
  ],
  a: 0,
  why: "The two-level model is similar to many-to-many except that it also allows a user thread to be bound to a kernel thread, which the figure shows as one user thread connected by a straight line to its own kernel thread while the others are multiplexed."
},
{
  n: 88, lec: 4, topic: "Pthreads", type: "Concept",
  q: "Which statement about Pthreads is correct?",
  opts: [
    "Pthreads is a POSIX standard API for thread creation and synchronisation: it is a specification, not an implementation, and may be provided at user level or kernel level",
    "Pthreads is a specific implementation shipped only with Linux and cannot be user-level",
    "Pthreads defines how the thread library must be implemented internally, leaving the API to each vendor",
    "Pthreads is the Java threading API managed by the JVM"
  ],
  a: 0,
  why: "Pthreads is the POSIX standard (IEEE 1003.1c) API for thread creation and synchronisation. It is a specification, not an implementation: the API specifies the behaviour of the thread library while the implementation is up to the developers of the library. It is common in UNIX systems such as Linux and macOS and may be user-level or kernel-level."
},
{
  n: 89, lec: 4, topic: "Java Threads", type: "Situational",
  q: "A Java class implements Runnable and defines run(). The program then executes Thread worker = new Thread(new Task()); worker.start(); and later worker.join() inside a try block. What do start() and join() do?",
  opts: [
    "start() begins execution of the new thread, which runs run(); join() makes the calling thread wait for that thread to finish",
    "start() calls run() directly in the current thread, and join() merges the two threads into one",
    "start() registers the thread with the JVM but does not run it until join() is called",
    "start() creates a new process, and join() collects its exit status"
  ],
  a: 0,
  why: "Java threads are managed by the JVM and are typically implemented using the threads model of the underlying OS. They may be created by extending the Thread class or, as standard practice, by implementing the Runnable interface. start() begins the new thread of execution, and join() waits on that thread, which is why it is wrapped in a try block catching InterruptedException."
},
{
  n: 90, lec: 4, topic: "Semantics of fork() and exec()", type: "Situational",
  q: "One thread of a multithreaded program calls fork() and the child immediately calls exec() to run a different program. Which version of fork() is appropriate, and why?",
  opts: [
    "The version that duplicates only the calling thread, because the program specified to exec() will replace the process anyway, so duplicating all threads is unnecessary",
    "The version that duplicates all threads, because the new program will need them to run in parallel",
    "Either version, because exec() restores all the parent's threads after loading the new program",
    "Neither, because fork() cannot be called from a multithreaded program"
  ],
  a: 0,
  why: "Some UNIX systems provide two versions of fork(): one that duplicates all threads and one that duplicates only the calling thread. If exec() is called immediately after forking, duplicating all threads is unnecessary because the new program replaces the process, so duplicating only the calling thread is appropriate."
},
{
  n: 91, lec: 4, topic: "Semantics of fork() and exec()", type: "Situational",
  q: "A multithreaded server forks a child that will keep running the same code instead of calling exec(). Which version of fork() should be used?",
  opts: [
    "The version that duplicates all threads, since the separate process will continue running the multithreaded program",
    "The version that duplicates only the calling thread, since the other threads can be re-created later automatically",
    "Neither; the server must terminate its other threads before forking",
    "The choice is made by the kernel at run time based on the number of cores"
  ],
  a: 0,
  why: "If the separate process does not call exec() after forking, it should duplicate all threads, because it will go on executing the multithreaded program. Which version to use therefore depends on whether exec() follows the fork()."
},
{
  n: 92, lec: 4, topic: "Semantics of exec()", type: "Concept",
  q: "In a process with five threads, one thread invokes exec(). What happens?",
  opts: [
    "The program specified to exec() replaces the entire process, including all five threads",
    "Only the calling thread is replaced; the other four keep running the old program",
    "The four remaining threads are suspended until the new program terminates",
    "exec() fails, because it may only be called by a single-threaded process"
  ],
  a: 0,
  why: "When a thread invokes exec(), the program specified in the parameter to exec() replaces the entire process, including all threads. That is exactly why duplicating all threads before an immediate exec() would be wasted work."
},
{
  n: 93, lec: 4, topic: "Signal Handling", type: "Situational",
  q: "A multithreaded process receives a signal. Signals are delivered at the process level, so the kernel must decide which thread handles it. Which approach is identified as best practice?",
  opts: [
    "Assign a specific thread to receive all signals for the process",
    "Deliver the signal to every thread in the process",
    "Deliver the signal to whichever thread is currently holding the CPU",
    "Discard the signal unless the process is single-threaded"
  ],
  a: 0,
  why: "A process can have many threads, but signals are still delivered at the process level, so the kernel must decide which thread handles the signal. The options are to deliver it to the thread to which the signal applies, to every thread, to certain threads, or to assign a specific thread to receive all signals for the process, which is the best practice."
},
{
  n: 94, lec: 4, topic: "Signal Handling", type: "Concept",
  q: "A signal such as the one generated by pressing Ctrl+C is processed by a signal handler. Which statement is correct?",
  opts: [
    "Every signal has a default handler that the kernel runs, and a user-defined handler can override the default",
    "Signals have no default behaviour, so a program that defines no handler will crash",
    "User-defined handlers are ignored unless the process is single-threaded",
    "Signals are delivered directly to the hardware rather than to the process"
  ],
  a: 0,
  why: "Signals notify a process that a particular event has occurred. A signal is generated by an event, delivered to the process, and handled by one of two handlers: the default handler that the kernel runs, or a user-defined handler that overrides it. For a single-threaded process the signal is simply delivered to the process."
},
{
  n: 95, lec: 4, topic: "Thread Cancellation", type: "Situational",
  q: "Several threads search a database concurrently and one of them returns the answer, so the rest are no longer needed. Terminating those threads before they finish is called thread cancellation. The thread being cancelled is known as:",
  opts: [
    "The target thread",
    "The upcall handler",
    "The lightweight process",
    "The parent thread"
  ],
  a: 0,
  why: "Thread cancellation means terminating a thread before it has finished, and the thread to be cancelled is the target thread. Other examples include cancelling all the threads loading a web page when the user presses the browser's stop button."
},
{
  n: 96, lec: 4, topic: "Thread Cancellation", type: "Situational",
  q: "A thread holding resources must be cancelled. Which cancellation approach is preferred, and why?",
  opts: [
    "Deferred cancellation, because the target thread periodically checks whether it should be cancelled, so it can stop at a safe point",
    "Asynchronous cancellation, because terminating the target thread immediately frees its resources soonest",
    "Asynchronous cancellation, because it is the default type in Pthreads",
    "Neither; a thread holding resources can never be cancelled"
  ],
  a: 0,
  why: "The two general approaches are asynchronous cancellation, which terminates the target thread immediately, and deferred cancellation, which allows the target thread to check periodically whether it should be cancelled. Deferred is preferred, and it is also the default type in Pthreads."
},
{
  n: 97, lec: 4, topic: "Thread Cancellation", type: "Situational",
  q: "A Pthreads program calls pthread_cancel(tid), but the target thread currently has cancellation disabled. What happens?",
  opts: [
    "The cancellation remains pending until the thread enables cancellation; with the default deferred type it then takes effect at a cancellation point such as pthread_testcancel(), after which the cleanup handler is invoked",
    "The target thread is terminated immediately regardless of its cancellation state",
    "pthread_cancel() fails and returns an error, and the request is discarded",
    "The calling thread is terminated instead of the target thread"
  ],
  a: 0,
  why: "Invoking thread cancellation only requests cancellation; the actual result depends on the thread's state. If cancellation is disabled the request remains pending until the thread enables it. The default type is deferred, so cancellation occurs only when the thread reaches a cancellation point such as pthread_testcancel(), and then the cleanup handler runs. On Linux, cancellation is handled through signals."
},
{
  n: 98, lec: 4, topic: "Thread-Local Storage", type: "Concept",
  q: "A task is submitted to a thread pool, so the programmer does not control thread creation but still needs data that is private to each thread and survives across function calls. Which facility fits, and how does it differ from a local variable?",
  opts: [
    "Thread-local storage, which is unique to each thread and visible across function invocations, whereas a local variable is visible only during a single function invocation",
    "A local variable, since locals are already thread-local and persist between calls",
    "A global variable, since globals are given a separate copy per thread automatically",
    "The thread's register set, which the library exposes for storing user data"
  ],
  a: 0,
  why: "Thread-local storage allows each thread to have its own copy of data, which is useful when you do not control the thread-creation process, as with a thread pool. It differs from local variables, which are visible only during a single function invocation; TLS is visible across invocations, more like static data, but unique to each thread."
},
{
  n: 99, lec: 4, topic: "Scheduler Activations", type: "Concept",
  q: "In the many-to-many and two-level models, which intermediate data structure appears between user and kernel threads, and what mechanism does the kernel use to communicate with the thread library?",
  opts: [
    "The lightweight process (LWP), which appears to be a virtual processor on which the process can schedule a user thread; the kernel communicates through upcalls to an upcall handler",
    "The process control block, with the kernel communicating through system calls issued by the library",
    "The thread environment block, with the kernel communicating through signals only",
    "The ready queue, with the kernel communicating through interrupts to the scheduler"
  ],
  a: 0,
  why: "Both M:M and two-level models need communication to maintain the right number of kernel threads for the application. They typically use an intermediate structure, the lightweight process, which looks like a virtual processor on which the process can schedule a user thread, with each LWP attached to a kernel thread. Scheduler activations provide upcalls, a communication mechanism from the kernel to the upcall handler in the thread library."
},
{
  n: 100, lec: 4, topic: "Linux Threads", type: "Situational",
  q: "A Linux program creates a new task with clone() and passes the flags CLONE_VM, CLONE_FS, CLONE_FILES and CLONE_SIGHAND. What is the result?",
  opts: [
    "A task that shares the parent's memory space, file-system information, open files and signal handlers, which behaves like a thread rather than a separate process",
    "A task that duplicates all of the parent's data, which behaves exactly like fork() with no sharing",
    "A task that shares only the parent's open files, while memory and signal handlers are copied",
    "A failure, because clone() cannot combine more than two flags"
  ],
  a: 0,
  why: "Linux refers to them as tasks rather than threads, and thread creation is done through clone(), which lets a child task share the address space of the parent. The flags control behaviour: CLONE_VM shares the memory space, CLONE_FS shares file-system information, CLONE_FILES shares the set of open files and CLONE_SIGHAND shares signal handlers. A struct task_struct points to the process data structures, which are then shared or unique depending on the flags."
}

];

/* ============================================================
   Quiz engine
   Each question is checked on its own: pick an option, press
   Submit answer, and the result plus the explanation appear
   straight away. Options are stored with the correct choice
   first for easy authoring, then shuffled deterministically
   before rendering, with a fresh shuffle on every retake.
   ============================================================ */

const LECTURES = [
  { id: 1, title: "Introduction to Operating Systems", sub: "Chapter 1" },
  { id: 2, title: "Operating-System Services and Structures", sub: "Chapter 2" },
  { id: 3, title: "Processes", sub: "Chapter 3" },
  { id: 4, title: "Threads and Concurrency", sub: "Chapter 4" }
];

const LETTERS = ["A", "B", "C", "D"];

const state = {
  picked: {},    // question number -> index into the original opts array
  graded: {},    // question number -> true once checked
  correct: {},   // question number -> true/false
  order: {},     // question number -> array of original indices, in display order
  attempt: 1,
  filter: "all",
  finished: false
};

const el = {
  exam: document.getElementById("exam"),
  progressFill: document.getElementById("progressFill"),
  progressText: document.getElementById("progressText"),
  liveScore: document.getElementById("liveScore"),
  finishBtn: document.getElementById("finishBtn"),
  jumpBtn: document.getElementById("jumpBtn"),
  results: document.getElementById("results"),
  resultScore: document.getElementById("resultScore"),
  resultPercent: document.getElementById("resultPercent"),
  resultCorrect: document.getElementById("resultCorrect"),
  resultIncorrect: document.getElementById("resultIncorrect"),
  resultBlank: document.getElementById("resultBlank"),
  resultVerdict: document.getElementById("resultVerdict"),
  resultBreakdown: document.getElementById("resultBreakdown"),
  filters: document.getElementById("filters"),
  retakeBtn: document.getElementById("retakeBtn"),
  topRetake: document.getElementById("topRetake")
};

/* ---------- helpers ---------- */

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Small seeded generator so a given attempt always deals the same order.
function seededRandom(seed) {
  let t = seed >>> 0;
  return function () {
    t += 0x6D2B79F5;
    let r = t;
    r = Math.imul(r ^ (r >>> 15), r | 1);
    r ^= r + Math.imul(r ^ (r >>> 7), r | 61);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function dealOrders() {
  QUESTIONS.forEach(function (q) {
    const rand = seededRandom(q.n * 7919 + state.attempt * 104729);
    const idx = q.opts.map(function (_, i) { return i; });
    for (let i = idx.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      const tmp = idx[i]; idx[i] = idx[j]; idx[j] = tmp;
    }
    state.order[q.n] = idx;
  });
}

// Letter shown on screen for a given original option index.
function letterOf(q, originalIndex) {
  return LETTERS[state.order[q.n].indexOf(originalIndex)];
}

function byNumber(n) {
  return QUESTIONS[n - 1];
}

function gradedCount() { return Object.keys(state.graded).length; }

function correctCount() {
  return Object.keys(state.correct).filter(function (k) { return state.correct[k]; }).length;
}

/* ---------- build the exam ---------- */

function questionMarkup(q) {
  const opts = state.order[q.n].map(function (orig, position) {
    return (
      '<li class="opt" data-index="' + orig + '">' +
        '<label class="opt-label">' +
          '<input type="radio" name="q' + q.n + '" value="' + orig + '">' +
          '<span class="opt-letter">' + LETTERS[position] + '</span>' +
          '<span class="opt-text">' + escapeHtml(q.opts[orig]) + '</span>' +
          '<span class="opt-mark" aria-hidden="true"></span>' +
        '</label>' +
      '</li>'
    );
  }).join("");

  return (
    '<article class="qcard" id="q' + q.n + '" data-n="' + q.n + '">' +
      '<div class="qnum" aria-hidden="true">' + q.n + '</div>' +
      '<div class="qbody">' +
        '<div class="qmeta">' +
          '<span class="tag tag-type">' + escapeHtml(q.type) + '</span>' +
          '<span class="tag tag-topic">' + escapeHtml(q.topic) + '</span>' +
        '</div>' +
        '<p class="qtext">' + escapeHtml(q.q) + '</p>' +
        '<ul class="opts" role="group" aria-label="Question ' + q.n + ' choices">' + opts + '</ul>' +
        '<div class="qactions">' +
          '<button type="button" class="btn btn-primary submit-q" data-n="' + q.n + '" disabled>' +
            'Submit answer' +
          '</button>' +
          '<span class="qhint">Choose an option, then submit to check it.</span>' +
        '</div>' +
        '<div class="feedback" hidden></div>' +
      '</div>' +
    '</article>'
  );
}

function renderExam() {
  el.exam.innerHTML = LECTURES.map(function (lec) {
    const items = QUESTIONS.filter(function (q) { return q.lec === lec.id; });
    const first = items[0].n;
    const last = items[items.length - 1].n;
    return (
      '<section class="lecture" data-lec="' + lec.id + '">' +
        '<header class="lechead">' +
          '<h2>' + escapeHtml(lec.title) + '</h2>' +
          '<p>' + escapeHtml(lec.sub) + ' &middot; questions ' + first + ' to ' + last + '</p>' +
        '</header>' +
        items.map(questionMarkup).join("") +
      '</section>'
    );
  }).join("");
}

/* ---------- picking an option ---------- */

function onExamChange(e) {
  const input = e.target;
  if (input.type !== "radio") return;
  const n = parseInt(input.name.slice(1), 10);
  if (state.graded[n]) return;

  state.picked[n] = parseInt(input.value, 10);

  const card = document.getElementById("q" + n);
  card.classList.add("answered");
  card.querySelectorAll(".opt").forEach(function (li) {
    li.classList.toggle("chosen", parseInt(li.dataset.index, 10) === state.picked[n]);
  });

  const btn = card.querySelector(".submit-q");
  btn.disabled = false;
  card.querySelector(".qhint").textContent = "Submit to see whether this is right.";
}

/* ---------- checking one question ---------- */

function gradeQuestion(n) {
  if (state.graded[n]) return;
  const chosen = state.picked[n];
  if (chosen === undefined) return;

  const q = byNumber(n);
  const isRight = chosen === q.a;
  state.graded[n] = true;
  state.correct[n] = isRight;

  const card = document.getElementById("q" + n);
  card.classList.add("graded", isRight ? "right" : "wrong");
  card.querySelectorAll("input[type=radio]").forEach(function (r) { r.disabled = true; });
  card.querySelectorAll(".opt").forEach(function (li) {
    const i = parseInt(li.dataset.index, 10);
    if (i === q.a) li.classList.add("is-correct");
    if (i === chosen && !isRight) li.classList.add("is-wrong");
  });
  card.querySelector(".qactions").hidden = true;

  const verdict = isRight
    ? '<span class="v v-right">Correct</span> <strong>' + letterOf(q, q.a) + '</strong> is the right choice.'
    : '<span class="v v-wrong">Incorrect</span> You chose <strong>' + letterOf(q, chosen) +
      '</strong>. The correct answer is <strong>' + letterOf(q, q.a) + '</strong>.';

  const fb = card.querySelector(".feedback");
  fb.innerHTML =
    '<p class="verdict">' + verdict + '</p>' +
    '<p class="why">' + escapeHtml(q.why) + '</p>';
  fb.hidden = false;

  updateProgress();

  if (gradedCount() === QUESTIONS.length) finish(true);
}

/* ---------- progress ---------- */

function updateProgress() {
  const done = gradedCount();
  const right = correctCount();
  el.progressFill.style.width = (done / QUESTIONS.length) * 100 + "%";
  el.progressText.textContent = "Answered " + done + " of " + QUESTIONS.length;
  el.liveScore.textContent = done ? "Score so far " + right + " / " + done : "No answers checked yet";
  el.finishBtn.disabled = done === 0;
}

function jumpToUnanswered() {
  const next = QUESTIONS.find(function (q) { return !state.graded[q.n]; });
  if (!next) {
    el.progressText.textContent = "All " + QUESTIONS.length + " questions answered";
    return;
  }
  const card = document.getElementById("q" + next.n);
  card.scrollIntoView({ behavior: "smooth", block: "center" });
  card.classList.add("flash");
  setTimeout(function () { card.classList.remove("flash"); }, 1400);
}

/* ---------- final summary ---------- */

function finish(auto) {
  const done = gradedCount();
  const skipped = QUESTIONS.length - done;

  if (!auto && skipped > 0) {
    const ok = confirm(
      skipped + (skipped === 1 ? " question has" : " questions have") +
      " not been answered yet and will count as wrong in the total.\n\nSee your result anyway?"
    );
    if (!ok) { jumpToUnanswered(); return; }
  }

  state.finished = true;

  const right = correctCount();
  const total = QUESTIONS.length;
  const pct = Math.round((right / total) * 1000) / 10;

  el.resultScore.textContent = right + " / " + total;
  el.resultPercent.textContent = pct + "%";
  el.resultCorrect.textContent = right;
  el.resultIncorrect.textContent = done - right;
  el.resultBlank.textContent = skipped;

  let verdict;
  if (skipped > 0) verdict = "Partial run: " + skipped + " question" + (skipped === 1 ? "" : "s") +
    " still unanswered. Keep going, or retake from the start.";
  else if (pct >= 90) verdict = "Excellent. The whole midterm scope is under control.";
  else if (pct >= 75) verdict = "Solid. Re-read the explanations on the ones you missed, then retake.";
  else if (pct >= 60) verdict = "Passing but shaky. Go back to the chapter behind your weakest section.";
  else verdict = "Re-read the lecture decks, then take this exam again.";
  el.resultVerdict.textContent = verdict;

  const per = {};
  QUESTIONS.forEach(function (q) {
    if (!per[q.lec]) per[q.lec] = { right: 0, total: 0 };
    per[q.lec].total++;
    if (state.correct[q.n]) per[q.lec].right++;
  });

  el.resultBreakdown.innerHTML = LECTURES.map(function (lec) {
    const s = per[lec.id];
    const p = Math.round((s.right / s.total) * 100);
    return (
      '<li>' +
        '<span class="bd-name">' + escapeHtml(lec.title) + '</span>' +
        '<span class="bd-bar"><span style="width:' + p + '%"></span></span>' +
        '<span class="bd-score">' + s.right + "/" + s.total + '</span>' +
      '</li>'
    );
  }).join("");

  el.results.hidden = false;
  el.topRetake.hidden = false;
  el.results.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ---------- review filters ---------- */

function applyFilter(name) {
  state.filter = name;
  el.filters.querySelectorAll("button").forEach(function (b) {
    const on = b.dataset.filter === name;
    b.classList.toggle("on", on);
    b.setAttribute("aria-pressed", on ? "true" : "false");
  });

  document.querySelectorAll(".qcard").forEach(function (card) {
    const n = parseInt(card.dataset.n, 10);
    let show = true;
    if (name === "wrong") show = state.graded[n] && !state.correct[n];
    else if (name === "right") show = !!state.correct[n];
    else if (name === "blank") show = !state.graded[n];
    card.hidden = !show;
  });

  document.querySelectorAll(".lecture").forEach(function (sec) {
    const any = Array.prototype.some.call(
      sec.querySelectorAll(".qcard"), function (c) { return !c.hidden; }
    );
    sec.hidden = !any;
  });
}

/* ---------- retake ---------- */

function retake() {
  state.picked = {};
  state.graded = {};
  state.correct = {};
  state.attempt += 1;
  state.filter = "all";
  state.finished = false;

  dealOrders();
  renderExam();

  el.results.hidden = true;
  el.topRetake.hidden = true;
  el.filters.querySelectorAll("button").forEach(function (b) {
    const on = b.dataset.filter === "all";
    b.classList.toggle("on", on);
    b.setAttribute("aria-pressed", on ? "true" : "false");
  });

  updateProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---------- start ---------- */

dealOrders();
renderExam();
updateProgress();

el.exam.addEventListener("change", onExamChange);
el.exam.addEventListener("click", function (e) {
  const btn = e.target.closest(".submit-q");
  if (btn) gradeQuestion(parseInt(btn.dataset.n, 10));
});
el.finishBtn.addEventListener("click", function () { finish(false); });
el.jumpBtn.addEventListener("click", jumpToUnanswered);
el.retakeBtn.addEventListener("click", retake);
el.topRetake.addEventListener("click", retake);
el.filters.addEventListener("click", function (e) {
  const btn = e.target.closest("button");
  if (btn) applyFilter(btn.dataset.filter);
});