#include <stdio.h>
#include <stdlib.h>
 
main()
{

    // Gold Save
    // Code By Jack

    // 0: Success
    // 1: Failure (Source does not exist)
    // 2: Failure (Target does not exist.)

    char ch, first[20], second[20];
    FILE *source, *target;
 

    printf("> Enter File Name to copy. (Default: program.gold)\n");
    gets(first);
 
    source = fopen(first, "r");
 
    if( source == NULL )
    {
        printf("> Process Failed.\n");
        exit(1);
    }
 
    printf("> Enter your file name. (Default: runner.js)\n");
    gets(second);
 
    target = fopen(second, "w");
 
    if( target == NULL )
    {
        fclose(source);
        printf("> Process Failed.\n");
        exit(1);
    }
 
    while( ( ch = fgetc(source) ) != EOF )
        fputc(ch, target);
 
        printf("> File Copied successfully.\n");
 
    fclose(source);
    fclose(target);
 
    return 0;
}
