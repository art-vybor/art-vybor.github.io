function hereDoc(f) {
  return f.toString().
      replace(/^[^\/]+\/\*!?/, '').
      replace(/\*\/[^\/]+$/, '');
}

var pdb1ZEH = hereDoc(function() {/*!

HEADER    HORMONE                                 01-MAY-98   1ZEH              
TITLE     STRUCTURE OF INSULIN                                                  
COMPND    MOL_ID: 1;                                                            
COMPND   2 MOLECULE: INSULIN;                                                   
COMPND   3 CHAIN: A, C;                                                         
COMPND   4 SYNONYM: B28ASP-MCR;                                                 
COMPND   5 ENGINEERED: YES;                                                     
COMPND   6 MUTATION: YES;                                                       
COMPND   7 MOL_ID: 2;                                                           
COMPND   8 MOLECULE: INSULIN;                                                   
COMPND   9 CHAIN: B, D;                                                         
COMPND  10 SYNONYM: B28ASP-MCR;                                                 
COMPND  11 ENGINEERED: YES;                                                     
COMPND  12 MUTATION: YES                                                        
SOURCE    MOL_ID: 1;                                                            
SOURCE   2 ORGANISM_SCIENTIFIC: HOMO SAPIENS;                                   
SOURCE   3 ORGANISM_COMMON: HUMAN;                                              
SOURCE   4 ORGANISM_TAXID: 9606;                                                
SOURCE   5 EXPRESSION_SYSTEM: SACCHAROMYCES CEREVISIAE;                         
SOURCE   6 EXPRESSION_SYSTEM_COMMON: BAKER'S YEAST;                             
SOURCE   7 EXPRESSION_SYSTEM_TAXID: 4932;                                       
SOURCE   8 MOL_ID: 2;                                                           
SOURCE   9 ORGANISM_SCIENTIFIC: HOMO SAPIENS;                                   
SOURCE  10 ORGANISM_COMMON: HUMAN;                                              
SOURCE  11 ORGANISM_TAXID: 9606;                                                
SOURCE  12 EXPRESSION_SYSTEM: SACCHAROMYCES CEREVISIAE;                         
SOURCE  13 EXPRESSION_SYSTEM_COMMON: BAKER'S YEAST;                             
SOURCE  14 EXPRESSION_SYSTEM_TAXID: 4932                                        
KEYWDS    HORMONE, METABOLIC ROLE, CHEMICAL ACTIVITY, INSULIN MUTANT,           
KEYWDS   2 CROSS-LINK, GLUCOSE METABOLISM, DIABETES                             
EXPDTA    X-RAY DIFFRACTION                                                     
AUTHOR    J.L.WHITTINGHAM,E.J.EDWARDS,A.A.ANTSON,J.M.CLARKSON,                  
AUTHOR   2 G.G.DODSON                                                           
REVDAT   4   03-NOV-09 1ZEH    1       MASTER REMARK SEQADV                     
REVDAT   3   24-FEB-09 1ZEH    1       VERSN                                    
REVDAT   2   13-JAN-99 1ZEH    3       HET    COMPND REMARK HETATM              
REVDAT   2 2                   3       LINK   SOURCE JRNL   CONECT              
REVDAT   1   09-DEC-98 1ZEH    0                                                
JRNL        AUTH   J.L.WHITTINGHAM,D.J.EDWARDS,A.A.ANTSON,                      
JRNL        AUTH 2 J.M.CLARKSON,G.G.DODSON                                      
JRNL        TITL   INTERACTIONS OF PHENOL AND M-CRESOL IN THE INSULIN           
JRNL        TITL 2 HEXAMER, AND THEIR EFFECT ON THE ASSOCIATION                 
JRNL        TITL 3 PROPERTIES OF B28 PRO --> ASP INSULIN ANALOGUES.             
JRNL        REF    BIOCHEMISTRY                  V.  37 11516 1998              
JRNL        REFN                   ISSN 0006-2960                               
JRNL        PMID   9708987                                                      
JRNL        DOI    10.1021/BI980807S                                            
REMARK   1                                                                      
REMARK   1 REFERENCE 1                                                          
REMARK   1  AUTH   E.CISZAK,J.M.BEALS,B.H.FRANK,J.C.BAKER,N.D.CARTER,           
REMARK   1  AUTH 2 G.D.SMITH                                                    
REMARK   1  TITL   ROLE OF C-TERMINAL B-CHAIN RESIDUES IN INSULIN               
REMARK   1  TITL 2 ASSEMBLY: THE STRUCTURE OF HEXAMERIC                         
REMARK   1  TITL 3 LYSB28PROB29-HUMAN INSULIN                                   
REMARK   1  REF    STRUCTURE                     V.   3   615 1995              
REMARK   1  REFN                   ISSN 0969-2126                               
REMARK   1 REFERENCE 2                                                          
REMARK   1  AUTH   G.D.SMITH,G.G.DODSON                                         
REMARK   1  TITL   THE STRUCTURE OF A RHOMBOHEDRAL R6 INSULIN HEXAMER           
REMARK   1  TITL 2 THAT BINDS PHENOL                                            
REMARK   1  REF    BIOPOLYMERS                   V.  32   441 1992              
REMARK   1  REFN                   ISSN 0006-3525                               
REMARK   2                                                                      
REMARK   2 RESOLUTION.    1.50 ANGSTROMS.                                       
REMARK   3                                                                      
REMARK   3 REFINEMENT.                                                          
REMARK   3   PROGRAM     : REFMAC                                               
REMARK   3   AUTHORS     : MURSHUDOV,VAGIN,DODSON                               
REMARK   3                                                                      
REMARK   3  DATA USED IN REFINEMENT.                                            
REMARK   3   RESOLUTION RANGE HIGH (ANGSTROMS) : 1.50                           
REMARK   3   RESOLUTION RANGE LOW  (ANGSTROMS) : 19.40                          
REMARK   3   DATA CUTOFF            (SIGMA(F)) : 0.000                          
REMARK   3   COMPLETENESS FOR RANGE        (%) : 97.5                           
REMARK   3   NUMBER OF REFLECTIONS             : 13601                          
REMARK   3                                                                      
REMARK   3  FIT TO DATA USED IN REFINEMENT.                                     
REMARK   3   CROSS-VALIDATION METHOD          : FREE R                          
REMARK   3   FREE R VALUE TEST SET SELECTION  : RANDOM                          
REMARK   3   R VALUE     (WORKING + TEST SET) : NULL                            
REMARK   3   R VALUE            (WORKING SET) : 0.159                           
REMARK   3   FREE R VALUE                     : 0.193                           
REMARK   3   FREE R VALUE TEST SET SIZE   (%) : 5.000                           
REMARK   3   FREE R VALUE TEST SET COUNT      : NULL                            
REMARK   3                                                                      
REMARK   3  NUMBER OF NON-HYDROGEN ATOMS USED IN REFINEMENT.                    
REMARK   3   PROTEIN ATOMS            : 837                                     
REMARK   3   NUCLEIC ACID ATOMS       : 0                                       
REMARK   3   HETEROGEN ATOMS          : 52                                      
REMARK   3   SOLVENT ATOMS            : 107                                     
REMARK   3                                                                      
REMARK   3  B VALUES.                                                           
REMARK   3   FROM WILSON PLOT           (A**2) : 16.90                          
REMARK   3   MEAN B VALUE      (OVERALL, A**2) : 20.10                          
REMARK   3   OVERALL ANISOTROPIC B VALUE.                                       
REMARK   3    B11 (A**2) : NULL                                                 
REMARK   3    B22 (A**2) : NULL                                                 
REMARK   3    B33 (A**2) : NULL                                                 
REMARK   3    B12 (A**2) : NULL                                                 
REMARK   3    B13 (A**2) : NULL                                                 
REMARK   3    B23 (A**2) : NULL                                                 
REMARK   3                                                                      
REMARK   3  ESTIMATED OVERALL COORDINATE ERROR.                                 
REMARK   3   ESU BASED ON R VALUE                            (A): NULL          
REMARK   3   ESU BASED ON FREE R VALUE                       (A): NULL          
REMARK   3   ESU BASED ON MAXIMUM LIKELIHOOD                 (A): NULL          
REMARK   3   ESU FOR B VALUES BASED ON MAXIMUM LIKELIHOOD (A**2): NULL          
REMARK   3                                                                      
REMARK   3  RMS DEVIATIONS FROM IDEAL VALUES.                                   
REMARK   3   DISTANCE RESTRAINTS.                    RMS    SIGMA               
REMARK   3    BOND LENGTH                     (A) : 0.014 ; 0.020               
REMARK   3    ANGLE DISTANCE                  (A) : 0.036 ; 0.040               
REMARK   3    INTRAPLANAR 1-4 DISTANCE        (A) : 0.036 ; 0.050               
REMARK   3    H-BOND OR METAL COORDINATION    (A) : NULL  ; NULL                
REMARK   3                                                                      
REMARK   3   PLANE RESTRAINT                  (A) : 0.027 ; 0.030               
REMARK   3   CHIRAL-CENTER RESTRAINT       (A**3) : 0.117 ; 0.100               
REMARK   3                                                                      
REMARK   3   NON-BONDED CONTACT RESTRAINTS.                                     
REMARK   3    SINGLE TORSION                  (A) : 0.169 ; 0.300               
REMARK   3    MULTIPLE TORSION                (A) : 0.276 ; 0.300               
REMARK   3    H-BOND (X...Y)                  (A) : 0.101 ; 0.300               
REMARK   3    H-BOND (X-H...Y)                (A) : NULL  ; NULL                
REMARK   3                                                                      
REMARK   3   CONFORMATIONAL TORSION ANGLE RESTRAINTS.                           
REMARK   3    SPECIFIED                 (DEGREES) : NULL  ; NULL                
REMARK   3    PLANAR                    (DEGREES) : 6.000 ; 7.000               
REMARK   3    STAGGERED                 (DEGREES) : 12.900; 15.000              
REMARK   3    TRANSVERSE                (DEGREES) : 16.600; 20.000              
REMARK   3                                                                      
REMARK   3  ISOTROPIC THERMAL FACTOR RESTRAINTS.    RMS    SIGMA                
REMARK   3   MAIN-CHAIN BOND              (A**2) : 1.564 ; 2.000                
REMARK   3   MAIN-CHAIN ANGLE             (A**2) : 2.359 ; 3.000                
REMARK   3   SIDE-CHAIN BOND              (A**2) : 2.061 ; 2.000                
REMARK   3   SIDE-CHAIN ANGLE             (A**2) : 2.987 ; 3.000                
REMARK   3                                                                      
REMARK   3  OTHER REFINEMENT REMARKS: NULL                                      
REMARK   4                                                                      
REMARK   4 1ZEH COMPLIES WITH FORMAT V. 3.15, 01-DEC-08                         
REMARK 100                                                                      
REMARK 100 THIS ENTRY HAS BEEN PROCESSED BY BNL.                                
REMARK 200                                                                      
REMARK 200 EXPERIMENTAL DETAILS                                                 
REMARK 200  EXPERIMENT TYPE                : X-RAY DIFFRACTION                  
REMARK 200  DATE OF DATA COLLECTION        : 27-JAN-97                          
REMARK 200  TEMPERATURE           (KELVIN) : 120                                
REMARK 200  PH                             : 6.8                                
REMARK 200  NUMBER OF CRYSTALS USED        : 2                                  
REMARK 200                                                                      
REMARK 200  SYNCHROTRON              (Y/N) : N                                  
REMARK 200  RADIATION SOURCE               : ROTATING ANODE                     
REMARK 200  BEAMLINE                       : NULL                               
REMARK 200  X-RAY GENERATOR MODEL          : RIGAKU RUH2R                       
REMARK 200  MONOCHROMATIC OR LAUE    (M/L) : M                                  
REMARK 200  WAVELENGTH OR RANGE        (A) : 1.5418                             
REMARK 200  MONOCHROMATOR                  : NULL                               
REMARK 200  OPTICS                         : NULL                               
REMARK 200                                                                      
REMARK 200  DETECTOR TYPE                  : IMAGE PLATE                        
REMARK 200  DETECTOR MANUFACTURER          : MARRESEARCH                        
REMARK 200  INTENSITY-INTEGRATION SOFTWARE : DENZO                              
REMARK 200  DATA SCALING SOFTWARE          : SCALEPACK                          
REMARK 200                                                                      
REMARK 200  NUMBER OF UNIQUE REFLECTIONS   : 13601                              
REMARK 200  RESOLUTION RANGE HIGH      (A) : 1.500                              
REMARK 200  RESOLUTION RANGE LOW       (A) : 19.400                             
REMARK 200  REJECTION CRITERIA  (SIGMA(I)) : NULL                               
REMARK 200                                                                      
REMARK 200 OVERALL.                                                             
REMARK 200  COMPLETENESS FOR RANGE     (%) : 97.5                               
REMARK 200  DATA REDUNDANCY                : 7.500                              
REMARK 200  R MERGE                    (I) : 0.07000                            
REMARK 200  R SYM                      (I) : NULL                               
REMARK 200  <I/SIGMA(I)> FOR THE DATA SET  : NULL                               
REMARK 200                                                                      
REMARK 200 IN THE HIGHEST RESOLUTION SHELL.                                     
REMARK 200  HIGHEST RESOLUTION SHELL, RANGE HIGH (A) : 1.50                     
REMARK 200  HIGHEST RESOLUTION SHELL, RANGE LOW  (A) : 1.53                     
REMARK 200  COMPLETENESS FOR SHELL     (%) : 54.6                               
REMARK 200  DATA REDUNDANCY IN SHELL       : NULL                               
REMARK 200  R MERGE FOR SHELL          (I) : 0.16900                            
REMARK 200  R SYM FOR SHELL            (I) : NULL                               
REMARK 200  <I/SIGMA(I)> FOR SHELL         : NULL                               
REMARK 200                                                                      
REMARK 200 DIFFRACTION PROTOCOL: NULL                                           
REMARK 200 METHOD USED TO DETERMINE THE STRUCTURE: NULL                         
REMARK 200 SOFTWARE USED: NULL                                                  
REMARK 200 STARTING MODEL: 4ZN INSULIN DIMER                                    
REMARK 200                                                                      
REMARK 200 REMARK: NULL                                                         
REMARK 280                                                                      
REMARK 280 CRYSTAL                                                              
REMARK 280 SOLVENT CONTENT, VS   (%): 40.00                                     
REMARK 280 MATTHEWS COEFFICIENT, VM (ANGSTROMS**3/DA): 1.93                     
REMARK 280                                                                      
REMARK 280 CRYSTALLIZATION CONDITIONS: BATCH METHOD, COMPOSITION OF             
REMARK 280  CRYSTALLISATION SOLUTION 3.5 MG INSULIN + 0.5 ML 0.02M HCL +        
REMARK 280  0.05 ML 0.12M ZINC ACETATE + 0.25 ML 0.2M TRI-SODIUM CITRATE +      
REMARK 280  0.2 ML 2.5% (W/V) M-CRESOL IN ETHANOL + 60 MG NACL, PH 6.8,         
REMARK 280  BATCH METHOD                                                        
REMARK 290                                                                      
REMARK 290 CRYSTALLOGRAPHIC SYMMETRY                                            
REMARK 290 SYMMETRY OPERATORS FOR SPACE GROUP: H 3                              
REMARK 290                                                                      
REMARK 290      SYMOP   SYMMETRY                                                
REMARK 290     NNNMMM   OPERATOR                                                
REMARK 290       1555   X,Y,Z                                                   
REMARK 290       2555   -Y,X-Y,Z                                                
REMARK 290       3555   -X+Y,-X,Z                                               
REMARK 290       4555   X+2/3,Y+1/3,Z+1/3                                       
REMARK 290       5555   -Y+2/3,X-Y+1/3,Z+1/3                                    
REMARK 290       6555   -X+Y+2/3,-X+1/3,Z+1/3                                   
REMARK 290       7555   X+1/3,Y+2/3,Z+2/3                                       
REMARK 290       8555   -Y+1/3,X-Y+2/3,Z+2/3                                    
REMARK 290       9555   -X+Y+1/3,-X+2/3,Z+2/3                                   
REMARK 290                                                                      
REMARK 290     WHERE NNN -> OPERATOR NUMBER                                     
REMARK 290           MMM -> TRANSLATION VECTOR                                  
REMARK 290                                                                      
REMARK 290 CRYSTALLOGRAPHIC SYMMETRY TRANSFORMATIONS                            
REMARK 290 THE FOLLOWING TRANSFORMATIONS OPERATE ON THE ATOM/HETATM             
REMARK 290 RECORDS IN THIS ENTRY TO PRODUCE CRYSTALLOGRAPHICALLY                
REMARK 290 RELATED MOLECULES.                                                   
REMARK 290   SMTRY1   1  1.000000  0.000000  0.000000        0.00000            
REMARK 290   SMTRY2   1  0.000000  1.000000  0.000000        0.00000            
REMARK 290   SMTRY3   1  0.000000  0.000000  1.000000        0.00000            
REMARK 290   SMTRY1   2 -0.500000 -0.866025  0.000000        0.00000            
REMARK 290   SMTRY2   2  0.866025 -0.500000  0.000000        0.00000            
REMARK 290   SMTRY3   2  0.000000  0.000000  1.000000        0.00000            
REMARK 290   SMTRY1   3 -0.500000  0.866025  0.000000        0.00000            
REMARK 290   SMTRY2   3 -0.866025 -0.500000  0.000000        0.00000            
REMARK 290   SMTRY3   3  0.000000  0.000000  1.000000        0.00000            
REMARK 290   SMTRY1   4  1.000000  0.000000  0.000000       38.74500            
REMARK 290   SMTRY2   4  0.000000  1.000000  0.000000       22.36944            
REMARK 290   SMTRY3   4  0.000000  0.000000  1.000000       12.97000            
REMARK 290   SMTRY1   5 -0.500000 -0.866025  0.000000       38.74500            
REMARK 290   SMTRY2   5  0.866025 -0.500000  0.000000       22.36944            
REMARK 290   SMTRY3   5  0.000000  0.000000  1.000000       12.97000            
REMARK 290   SMTRY1   6 -0.500000  0.866025  0.000000       38.74500            
REMARK 290   SMTRY2   6 -0.866025 -0.500000  0.000000       22.36944            
REMARK 290   SMTRY3   6  0.000000  0.000000  1.000000       12.97000            
REMARK 290   SMTRY1   7  1.000000  0.000000  0.000000        0.00000            
REMARK 290   SMTRY2   7  0.000000  1.000000  0.000000       44.73887            
REMARK 290   SMTRY3   7  0.000000  0.000000  1.000000       25.94000            
REMARK 290   SMTRY1   8 -0.500000 -0.866025  0.000000        0.00000            
REMARK 290   SMTRY2   8  0.866025 -0.500000  0.000000       44.73887            
REMARK 290   SMTRY3   8  0.000000  0.000000  1.000000       25.94000            
REMARK 290   SMTRY1   9 -0.500000  0.866025  0.000000        0.00000            
REMARK 290   SMTRY2   9 -0.866025 -0.500000  0.000000       44.73887            
REMARK 290   SMTRY3   9  0.000000  0.000000  1.000000       25.94000            
REMARK 290                                                                      
REMARK 290 REMARK: NULL                                                         
REMARK 300                                                                      
REMARK 300 BIOMOLECULE: 1, 2, 3, 4, 5, 6, 7                                     
REMARK 300 SEE REMARK 350 FOR THE AUTHOR PROVIDED AND/OR PROGRAM                
REMARK 300 GENERATED ASSEMBLY INFORMATION FOR THE STRUCTURE IN                  
REMARK 300 THIS ENTRY. THE REMARK MAY ALSO PROVIDE INFORMATION ON               
REMARK 300 BURIED SURFACE AREA.                                                 
REMARK 350                                                                      
REMARK 350 COORDINATES FOR A COMPLETE MULTIMER REPRESENTING THE KNOWN           
REMARK 350 BIOLOGICALLY SIGNIFICANT OLIGOMERIZATION STATE OF THE                
REMARK 350 MOLECULE CAN BE GENERATED BY APPLYING BIOMT TRANSFORMATIONS          
REMARK 350 GIVEN BELOW.  BOTH NON-CRYSTALLOGRAPHIC AND                          
REMARK 350 CRYSTALLOGRAPHIC OPERATIONS ARE GIVEN.                               
REMARK 350                                                                      
REMARK 350 BIOMOLECULE: 1                                                       
REMARK 350 AUTHOR DETERMINED BIOLOGICAL UNIT: DIMERIC                           
REMARK 350 SOFTWARE DETERMINED QUATERNARY STRUCTURE: DIMERIC                    
REMARK 350 SOFTWARE USED: PISA                                                  
REMARK 350 TOTAL BURIED SURFACE AREA: 1240 ANGSTROM**2                          
REMARK 350 SURFACE AREA OF THE COMPLEX: 4700 ANGSTROM**2                        
REMARK 350 CHANGE IN SOLVENT FREE ENERGY: -9.0 KCAL/MOL                         
REMARK 350 APPLY THE FOLLOWING TO CHAINS: A, B                                  
REMARK 350   BIOMT1   1  1.000000  0.000000  0.000000        0.00000            
REMARK 350   BIOMT2   1  0.000000  1.000000  0.000000        0.00000            
REMARK 350   BIOMT3   1  0.000000  0.000000  1.000000        0.00000            
REMARK 350                                                                      
REMARK 350 BIOMOLECULE: 2                                                       
REMARK 350 AUTHOR DETERMINED BIOLOGICAL UNIT: DIMERIC                           
REMARK 350 SOFTWARE DETERMINED QUATERNARY STRUCTURE: DIMERIC                    
REMARK 350 SOFTWARE USED: PISA                                                  
REMARK 350 TOTAL BURIED SURFACE AREA: 1460 ANGSTROM**2                          
REMARK 350 SURFACE AREA OF THE COMPLEX: 4370 ANGSTROM**2                        
REMARK 350 CHANGE IN SOLVENT FREE ENERGY: -10.0 KCAL/MOL                        
REMARK 350 APPLY THE FOLLOWING TO CHAINS: C, D                                  
REMARK 350   BIOMT1   1  1.000000  0.000000  0.000000        0.00000            
REMARK 350   BIOMT2   1  0.000000  1.000000  0.000000        0.00000            
REMARK 350   BIOMT3   1  0.000000  0.000000  1.000000        0.00000            
REMARK 350                                                                      
REMARK 350 BIOMOLECULE: 3                                                       
REMARK 350 SOFTWARE DETERMINED QUATERNARY STRUCTURE: DODECAMERIC                
REMARK 350 SOFTWARE USED: PISA                                                  
REMARK 350 TOTAL BURIED SURFACE AREA: 23290 ANGSTROM**2                         
REMARK 350 SURFACE AREA OF THE COMPLEX: 12450 ANGSTROM**2                       
REMARK 350 CHANGE IN SOLVENT FREE ENERGY: -273.0 KCAL/MOL                       
REMARK 350 APPLY THE FOLLOWING TO CHAINS: A, B, C, D                            
REMARK 350   BIOMT1   1  1.000000  0.000000  0.000000        0.00000            
REMARK 350   BIOMT2   1  0.000000  1.000000  0.000000        0.00000            
REMARK 350   BIOMT3   1  0.000000  0.000000  1.000000        0.00000            
REMARK 350   BIOMT1   2 -0.500000 -0.866025  0.000000        0.00000            
REMARK 350   BIOMT2   2  0.866025 -0.500000  0.000000        0.00000            
REMARK 350   BIOMT3   2  0.000000  0.000000  1.000000        0.00000            
REMARK 350   BIOMT1   3 -0.500000  0.866025  0.000000        0.00000            
REMARK 350   BIOMT2   3 -0.866025 -0.500000  0.000000        0.00000            
REMARK 350   BIOMT3   3  0.000000  0.000000  1.000000        0.00000            
REMARK 350                                                                      
REMARK 350 BIOMOLECULE: 4                                                       
REMARK 350 SOFTWARE DETERMINED QUATERNARY STRUCTURE: TETRAMERIC                 
REMARK 350 SOFTWARE USED: PISA                                                  
REMARK 350 TOTAL BURIED SURFACE AREA: 4870 ANGSTROM**2                          
REMARK 350 SURFACE AREA OF THE COMPLEX: 6890 ANGSTROM**2                        
REMARK 350 CHANGE IN SOLVENT FREE ENERGY: -15.0 KCAL/MOL                        
REMARK 350 APPLY THE FOLLOWING TO CHAINS: A, B, C, D                            
REMARK 350   BIOMT1   1  1.000000  0.000000  0.000000        0.00000            
REMARK 350   BIOMT2   1  0.000000  1.000000  0.000000        0.00000            
REMARK 350   BIOMT3   1  0.000000  0.000000  1.000000        0.00000            
REMARK 350                                                                      
REMARK 350 BIOMOLECULE: 5                                                       
REMARK 350 SOFTWARE DETERMINED QUATERNARY STRUCTURE: TETRAMERIC                 
REMARK 350 SOFTWARE USED: PISA                                                  
REMARK 350 TOTAL BURIED SURFACE AREA: 4030 ANGSTROM**2                          
REMARK 350 SURFACE AREA OF THE COMPLEX: 7730 ANGSTROM**2                        
REMARK 350 CHANGE IN SOLVENT FREE ENERGY: -15.0 KCAL/MOL                        
REMARK 350 APPLY THE FOLLOWING TO CHAINS: C, D                                  
REMARK 350   BIOMT1   1  1.000000  0.000000  0.000000        0.00000            
REMARK 350   BIOMT2   1  0.000000  1.000000  0.000000        0.00000            
REMARK 350   BIOMT3   1  0.000000  0.000000  1.000000        0.00000            
REMARK 350 APPLY THE FOLLOWING TO CHAINS: A, B                                  
REMARK 350   BIOMT1   2 -0.500000  0.866025  0.000000        0.00000            
REMARK 350   BIOMT2   2 -0.866025 -0.500000  0.000000        0.00000            
REMARK 350   BIOMT3   2  0.000000  0.000000  1.000000        0.00000            
REMARK 350                                                                      
REMARK 350 BIOMOLECULE: 6                                                       
REMARK 350 SOFTWARE DETERMINED QUATERNARY STRUCTURE: HEXAMERIC                  
REMARK 350 SOFTWARE USED: PISA                                                  
REMARK 350 TOTAL BURIED SURFACE AREA: 5910 ANGSTROM**2                          
REMARK 350 SURFACE AREA OF THE COMPLEX: 12120 ANGSTROM**2                       
REMARK 350 CHANGE IN SOLVENT FREE ENERGY: -149.0 KCAL/MOL                       
REMARK 350 APPLY THE FOLLOWING TO CHAINS: A, B                                  
REMARK 350   BIOMT1   1  1.000000  0.000000  0.000000        0.00000            
REMARK 350   BIOMT2   1  0.000000  1.000000  0.000000        0.00000            
REMARK 350   BIOMT3   1  0.000000  0.000000  1.000000        0.00000            
REMARK 350   BIOMT1   2 -0.500000 -0.866025  0.000000        0.00000            
REMARK 350   BIOMT2   2  0.866025 -0.500000  0.000000        0.00000            
REMARK 350   BIOMT3   2  0.000000  0.000000  1.000000        0.00000            
REMARK 350   BIOMT1   3 -0.500000  0.866025  0.000000        0.00000            
REMARK 350   BIOMT2   3 -0.866025 -0.500000  0.000000        0.00000            
REMARK 350   BIOMT3   3  0.000000  0.000000  1.000000        0.00000            
REMARK 350                                                                      
REMARK 350 BIOMOLECULE: 7                                                       
REMARK 350 SOFTWARE DETERMINED QUATERNARY STRUCTURE: HEXAMERIC                  
REMARK 350 SOFTWARE USED: PISA                                                  
REMARK 350 TOTAL BURIED SURFACE AREA: 6850 ANGSTROM**2                          
REMARK 350 SURFACE AREA OF THE COMPLEX: 10860 ANGSTROM**2                       
REMARK 350 CHANGE IN SOLVENT FREE ENERGY: -148.0 KCAL/MOL                       
REMARK 350 APPLY THE FOLLOWING TO CHAINS: C, D                                  
REMARK 350   BIOMT1   1  1.000000  0.000000  0.000000        0.00000            
REMARK 350   BIOMT2   1  0.000000  1.000000  0.000000        0.00000            
REMARK 350   BIOMT3   1  0.000000  0.000000  1.000000        0.00000            
REMARK 350   BIOMT1   2 -0.500000 -0.866025  0.000000        0.00000            
REMARK 350   BIOMT2   2  0.866025 -0.500000  0.000000        0.00000            
REMARK 350   BIOMT3   2  0.000000  0.000000  1.000000        0.00000            
REMARK 350   BIOMT1   3 -0.500000  0.866025  0.000000        0.00000            
REMARK 350   BIOMT2   3 -0.866025 -0.500000  0.000000        0.00000            
REMARK 350   BIOMT3   3  0.000000  0.000000  1.000000        0.00000            
REMARK 375                                                                      
REMARK 375 SPECIAL POSITION                                                     
REMARK 375 THE FOLLOWING ATOMS ARE FOUND TO BE WITHIN 0.15 ANGSTROMS            
REMARK 375 OF A SYMMETRY RELATED ATOM AND ARE ASSUMED TO BE ON SPECIAL          
REMARK 375 POSITIONS.                                                           
REMARK 375                                                                      
REMARK 375 ATOM RES CSSEQI                                                      
REMARK 375 ZN    ZN B  31  LIES ON A SPECIAL POSITION.                          
REMARK 375 ZN    ZN D  31  LIES ON A SPECIAL POSITION.                          
REMARK 375 CL    CL B  32  LIES ON A SPECIAL POSITION.                          
REMARK 375 CL    CL D  32  LIES ON A SPECIAL POSITION.                          
REMARK 375      HOH D  50  LIES ON A SPECIAL POSITION.                          
REMARK 375      HOH D  53  LIES ON A SPECIAL POSITION.                          
REMARK 375      HOH D  60  LIES ON A SPECIAL POSITION.                          
REMARK 475                                                                      
REMARK 475 ZERO OCCUPANCY RESIDUES                                              
REMARK 475 THE FOLLOWING RESIDUES WERE MODELED WITH ZERO OCCUPANCY.             
REMARK 475 THE LOCATION AND PROPERTIES OF THESE RESIDUES MAY NOT                
REMARK 475 BE RELIABLE. (M=MODEL NUMBER; RES=RESIDUE NAME;                      
REMARK 475 C=CHAIN IDENTIFIER; SSEQ=SEQUENCE NUMBER; I=INSERTION CODE)          
REMARK 475   M RES C SSEQI                                                      
REMARK 475     THR B   30                                                       
REMARK 480                                                                      
REMARK 480 ZERO OCCUPANCY ATOM                                                  
REMARK 480 THE FOLLOWING RESIDUES HAVE ATOMS MODELED WITH ZERO                  
REMARK 480 OCCUPANCY. THE LOCATION AND PROPERTIES OF THESE ATOMS                
REMARK 480 MAY NOT BE RELIABLE. (M=MODEL NUMBER; RES=RESIDUE NAME;              
REMARK 480 C=CHAIN IDENTIFIER; SSEQ=SEQUENCE NUMBER; I=INSERTION CODE):         
REMARK 480   M RES C SSEQI ATOMS                                                
REMARK 480     GLU A    4   CG    CD    OE1   OE2                               
REMARK 480     GLN A    5   OE1   NE2                                           
REMARK 480     ASN A   21   OD1   ND2                                           
REMARK 480     PHE B    1   N     CA    CB    CG    CD1   CD2   CE1             
REMARK 480     PHE B    1   CE2   CZ                                            
REMARK 480     ASN B    3   OD1   ND2                                           
REMARK 480     GLN B    4   CG    CD    OE1   NE2                               
REMARK 480     GLU B   13   CD    OE1   OE2                                     
REMARK 480     GLU B   21   CD    OE1   OE2                                     
REMARK 480     PHE B   25   CG    CD1   CD2   CE1   CE2   CZ                    
REMARK 480     THR B   27   CG2                                                 
REMARK 480     LYS B   29   CA    C     O     CB    CG    CD    CE              
REMARK 480     LYS B   29   NZ                                                  
REMARK 480     TYR C   14   CG    CD1   CD2   CE1   CE2   CZ    OH              
REMARK 480     ASN D    3   OD1   ND2                                           
REMARK 480     GLN D    4   CG    CD    OE1   NE2                               
REMARK 500                                                                      
REMARK 500 GEOMETRY AND STEREOCHEMISTRY                                         
REMARK 500 SUBTOPIC: CLOSE CONTACTS IN SAME ASYMMETRIC UNIT                     
REMARK 500                                                                      
REMARK 500 THE FOLLOWING ATOMS ARE IN CLOSE CONTACT.                            
REMARK 500                                                                      
REMARK 500  ATM1  RES C  SSEQI   ATM2  RES C  SSEQI           DISTANCE          
REMARK 500   CE1  TYR C    14     O    HOH C    35              2.09            
REMARK 500   OE1  GLU D    13     O    HOH D    65              2.13            
REMARK 500                                                                      
REMARK 500 REMARK: NULL                                                         
REMARK 500                                                                      
REMARK 500 GEOMETRY AND STEREOCHEMISTRY                                         
REMARK 500 SUBTOPIC: CLOSE CONTACTS                                             
REMARK 500                                                                      
REMARK 500 THE FOLLOWING ATOMS THAT ARE RELATED BY CRYSTALLOGRAPHIC             
REMARK 500 SYMMETRY ARE IN CLOSE CONTACT.  AN ATOM LOCATED WITHIN 0.15          
REMARK 500 ANGSTROMS OF A SYMMETRY RELATED ATOM IS ASSUMED TO BE ON A           
REMARK 500 SPECIAL POSITION AND IS, THEREFORE, LISTED IN REMARK 375             
REMARK 500 INSTEAD OF REMARK 500.  ATOMS WITH NON-BLANK ALTERNATE               
REMARK 500 LOCATION INDICATORS ARE NOT INCLUDED IN THE CALCULATIONS.            
REMARK 500                                                                      
REMARK 500 DISTANCE CUTOFF:                                                     
REMARK 500 2.2 ANGSTROMS FOR CONTACTS NOT INVOLVING HYDROGEN ATOMS              
REMARK 500 1.6 ANGSTROMS FOR CONTACTS INVOLVING HYDROGEN ATOMS                  
REMARK 500                                                                      
REMARK 500  ATM1  RES C  SSEQI   ATM2  RES C  SSEQI  SSYMOP   DISTANCE          
REMARK 500   CD1  ILE C    10     NZ   LYS B    29     5554     1.95            
REMARK 500   O    HOH C    40     O    HOH A    37     8554     2.15            
REMARK 500   O    HOH A    36     O    HOH D    45     6455     2.18            
REMARK 500   O    HOH A    31     O    HOH D    52     2555     2.18            
REMARK 500                                                                      
REMARK 500 REMARK: NULL                                                         
REMARK 500                                                                      
REMARK 500 GEOMETRY AND STEREOCHEMISTRY                                         
REMARK 500 SUBTOPIC: COVALENT BOND ANGLES                                       
REMARK 500                                                                      
REMARK 500 THE STEREOCHEMICAL PARAMETERS OF THE FOLLOWING RESIDUES              
REMARK 500 HAVE VALUES WHICH DEVIATE FROM EXPECTED VALUES BY MORE               
REMARK 500 THAN 6*RMSD (M=MODEL NUMBER; RES=RESIDUE NAME; C=CHAIN               
REMARK 500 IDENTIFIER; SSEQ=SEQUENCE NUMBER; I=INSERTION CODE).                 
REMARK 500                                                                      
REMARK 500 STANDARD TABLE:                                                      
REMARK 500 FORMAT: (10X,I3,1X,A3,1X,A1,I4,A1,3(1X,A4,2X),12X,F5.1)              
REMARK 500                                                                      
REMARK 500 EXPECTED VALUES PROTEIN: ENGH AND HUBER, 1999                        
REMARK 500 EXPECTED VALUES NUCLEIC ACID: CLOWNEY ET AL 1996                     
REMARK 500                                                                      
REMARK 500  M RES CSSEQI ATM1   ATM2   ATM3                                     
REMARK 500    TYR A  19   CB  -  CG  -  CD2 ANGL. DEV. =   3.9 DEGREES          
REMARK 500    ARG B  22   NE  -  CZ  -  NH1 ANGL. DEV. =  -3.5 DEGREES          
REMARK 500    ARG B  22   NE  -  CZ  -  NH2 ANGL. DEV. =   6.5 DEGREES          
REMARK 500    HIS D   5   O   -  C   -  N   ANGL. DEV. = -28.0 DEGREES          
REMARK 500                                                                      
REMARK 500 REMARK: NULL                                                         
REMARK 500                                                                      
REMARK 500 GEOMETRY AND STEREOCHEMISTRY                                         
REMARK 500 SUBTOPIC: TORSION ANGLES                                             
REMARK 500                                                                      
REMARK 500 TORSION ANGLES OUTSIDE THE EXPECTED RAMACHANDRAN REGIONS:            
REMARK 500 (M=MODEL NUMBER; RES=RESIDUE NAME; C=CHAIN IDENTIFIER;               
REMARK 500 SSEQ=SEQUENCE NUMBER; I=INSERTION CODE).                             
REMARK 500                                                                      
REMARK 500 STANDARD TABLE:                                                      
REMARK 500 FORMAT:(10X,I3,1X,A3,1X,A1,I4,A1,4X,F7.2,3X,F7.2)                    
REMARK 500                                                                      
REMARK 500 EXPECTED VALUES: GJ KLEYWEGT AND TA JONES (1996). PHI/PSI-           
REMARK 500 CHOLOGY: RAMACHANDRAN REVISITED. STRUCTURE 4, 1395 - 1400            
REMARK 500                                                                      
REMARK 500  M RES CSSEQI        PSI       PHI                                   
REMARK 500    ASP B  28      152.10    127.23                                   
REMARK 500    ASP D  28     -153.32     56.46                                   
REMARK 500                                                                      
REMARK 500 REMARK: NULL                                                         
REMARK 500                                                                      
REMARK 500 GEOMETRY AND STEREOCHEMISTRY                                         
REMARK 500 SUBTOPIC: MAIN CHAIN PLANARITY                                       
REMARK 500                                                                      
REMARK 500 THE FOLLOWING RESIDUES HAVE A PSEUDO PLANARITY                       
REMARK 500 TORSION ANGLE, C(I) - CA(I) - N(I+1) - O(I), GREATER                 
REMARK 500 10.0 DEGREES. (M=MODEL NUMBER; RES=RESIDUE NAME;                     
REMARK 500 C=CHAIN IDENTIFIER; SSEQ=SEQUENCE NUMBER;                            
REMARK 500 I=INSERTION CODE).                                                   
REMARK 500                                                                      
REMARK 500  M RES CSSEQI        ANGLE                                           
REMARK 500    SER A   9         11.42                                           
REMARK 500    GLN D   4         33.30                                           
REMARK 500                                                                      
REMARK 500 REMARK: NULL                                                         
REMARK 525                                                                      
REMARK 525 SOLVENT                                                              
REMARK 525                                                                      
REMARK 525 THE SOLVENT MOLECULES HAVE CHAIN IDENTIFIERS THAT                    
REMARK 525 INDICATE THE POLYMER CHAIN WITH WHICH THEY ARE MOST                  
REMARK 525 CLOSELY ASSOCIATED. THE REMARK LISTS ALL THE SOLVENT                 
REMARK 525 MOLECULES WHICH ARE MORE THAN 5A AWAY FROM THE                       
REMARK 525 NEAREST POLYMER CHAIN (M = MODEL NUMBER;                             
REMARK 525 RES=RESIDUE NAME; C=CHAIN IDENTIFIER; SSEQ=SEQUENCE                  
REMARK 525 NUMBER; I=INSERTION CODE):                                           
REMARK 525                                                                      
REMARK 525  M RES CSSEQI                                                        
REMARK 525    HOH C  45        DISTANCE =  5.50 ANGSTROMS                       
REMARK 525    HOH A  51        DISTANCE =  6.16 ANGSTROMS                       
REMARK 525    HOH A  52        DISTANCE =  6.93 ANGSTROMS                       
REMARK 525    HOH A  55        DISTANCE =  5.49 ANGSTROMS                       
REMARK 620                                                                      
REMARK 620 METAL COORDINATION                                                   
REMARK 620  (M=MODEL NUMBER; RES=RESIDUE NAME; C=CHAIN IDENTIFIER;              
REMARK 620  SSEQ=SEQUENCE NUMBER; I=INSERTION CODE):                            
REMARK 620                                                                      
REMARK 620 COORDINATION ANGLES FOR:  M RES CSSEQI METAL                         
REMARK 620                              ZN B  31  ZN                            
REMARK 620 N RES CSSEQI ATOM                                                    
REMARK 620 1 HIS B  10   NE2                                                    
REMARK 620 2  CL B  32  CL   109.7                                              
REMARK 620 N                    1                                               
REMARK 620                                                                      
REMARK 620 COORDINATION ANGLES FOR:  M RES CSSEQI METAL                         
REMARK 620                              ZN D  31  ZN                            
REMARK 620 N RES CSSEQI ATOM                                                    
REMARK 620 1 HIS D  10   NE2                                                    
REMARK 620 2  CL D  32  CL   108.8                                              
REMARK 620 N                    1                                               
REMARK 800                                                                      
REMARK 800 SITE                                                                 
REMARK 800 SITE_IDENTIFIER: AC1                                                 
REMARK 800 EVIDENCE_CODE: SOFTWARE                                              
REMARK 800 SITE_DESCRIPTION: BINDING SITE FOR RESIDUE ZN B 31                   
REMARK 800 SITE_IDENTIFIER: AC2                                                 
REMARK 800 EVIDENCE_CODE: SOFTWARE                                              
REMARK 800 SITE_DESCRIPTION: BINDING SITE FOR RESIDUE ZN D 31                   
REMARK 800 SITE_IDENTIFIER: AC3                                                 
REMARK 800 EVIDENCE_CODE: SOFTWARE                                              
REMARK 800 SITE_DESCRIPTION: BINDING SITE FOR RESIDUE CL B 32                   
REMARK 800 SITE_IDENTIFIER: AC4                                                 
REMARK 800 EVIDENCE_CODE: SOFTWARE                                              
REMARK 800 SITE_DESCRIPTION: BINDING SITE FOR RESIDUE CL D 32                   
REMARK 800 SITE_IDENTIFIER: AC5                                                 
REMARK 800 EVIDENCE_CODE: SOFTWARE                                              
REMARK 800 SITE_DESCRIPTION: BINDING SITE FOR RESIDUE CRS C 22                  
REMARK 800 SITE_IDENTIFIER: AC6                                                 
REMARK 800 EVIDENCE_CODE: SOFTWARE                                              
REMARK 800 SITE_DESCRIPTION: BINDING SITE FOR RESIDUE CRS D 33                  
REMARK 800 SITE_IDENTIFIER: AC7                                                 
REMARK 800 EVIDENCE_CODE: SOFTWARE                                              
REMARK 800 SITE_DESCRIPTION: BINDING SITE FOR RESIDUE CRS D 34                  
REMARK 800 SITE_IDENTIFIER: AC8                                                 
REMARK 800 EVIDENCE_CODE: SOFTWARE                                              
REMARK 800 SITE_DESCRIPTION: BINDING SITE FOR RESIDUE CRS A 22                  
REMARK 800 SITE_IDENTIFIER: AC9                                                 
REMARK 800 EVIDENCE_CODE: SOFTWARE                                              
REMARK 800 SITE_DESCRIPTION: BINDING SITE FOR RESIDUE CRS D 35                  
DBREF  1ZEH A    1    21  UNP    P01308   INS_HUMAN       31     51             
DBREF  1ZEH B    1    30  UNP    P01308   INS_HUMAN       25     54             
DBREF  1ZEH C    1    21  UNP    P01308   INS_HUMAN       31     51             
DBREF  1ZEH D    1    30  UNP    P01308   INS_HUMAN       25     54             
SEQADV 1ZEH ASP B   28  UNP  P01308    PRO    52 ENGINEERED                     
SEQADV 1ZEH ASP D   28  UNP  P01308    PRO    52 ENGINEERED                     
SEQRES   1 A   21  GLY ILE VAL GLU GLN CYS CYS THR SER ILE CYS SER LEU          
SEQRES   2 A   21  TYR GLN LEU GLU ASN TYR CYS ASN                              
SEQRES   1 B   30  PHE VAL ASN GLN HIS LEU CYS GLY SER HIS LEU VAL GLU          
SEQRES   2 B   30  ALA LEU TYR LEU VAL CYS GLY GLU ARG GLY PHE PHE TYR          
SEQRES   3 B   30  THR ASP LYS THR                                              
SEQRES   1 C   21  GLY ILE VAL GLU GLN CYS CYS THR SER ILE CYS SER LEU          
SEQRES   2 C   21  TYR GLN LEU GLU ASN TYR CYS ASN                              
SEQRES   1 D   30  PHE VAL ASN GLN HIS LEU CYS GLY SER HIS LEU VAL GLU          
SEQRES   2 D   30  ALA LEU TYR LEU VAL CYS GLY GLU ARG GLY PHE PHE TYR          
SEQRES   3 D   30  THR ASP LYS THR                                              
HET     ZN  B  31       1                                                       
HET     ZN  D  31       1                                                       
HET     CL  B  32       1                                                       
HET     CL  D  32       1                                                       
HET    CRS  C  22       8                                                       
HET    CRS  D  33       8                                                       
HET    CRS  D  34       8                                                       
HET    CRS  A  22       8                                                       
HET    CRS  D  35      16                                                       
HETNAM      ZN ZINC ION                                                         
HETNAM      CL CHLORIDE ION                                                     
HETNAM     CRS M-CRESOL                                                         
FORMUL   5   ZN    2(ZN 2+)                                                     
FORMUL   7   CL    2(CL 1-)                                                     
FORMUL   9  CRS    5(C7 H8 O)                                                   
FORMUL  14  HOH   *107(H2 O)                                                    
HELIX    1   1 ILE A    2  CYS A    6  1                                   5    
HELIX    2   2 LEU A   13  TYR A   19  1                                   7    
HELIX    3   3 VAL B    2  ARG B   22  1                                  21    
HELIX    4   4 ILE C    2  CYS C    6  1                                   5    
HELIX    5   5 LEU C   13  TYR C   19  1                                   7    
HELIX    6   6 VAL D    2  ARG D   22  1                                  21    
SHEET    1   A 2 PHE B  24  TYR B  26  0                                        
SHEET    2   A 2 PHE D  24  TYR D  26 -1  N  TYR D  26   O  PHE B  24           
SSBOND   1 CYS A    6    CYS A   11                          1555   1555  2.05  
SSBOND   2 CYS A    7    CYS B    7                          1555   1555  2.04  
SSBOND   3 CYS A   20    CYS B   19                          1555   1555  2.03  
SSBOND   4 CYS C    6    CYS C   11                          1555   1555  2.02  
SSBOND   5 CYS C    7    CYS D    7                          1555   1555  2.03  
SSBOND   6 CYS C   20    CYS D   19                          1555   1555  2.01  
LINK        ZN    ZN B  31                 NE2 HIS B  10     1555   1555  1.99  
LINK        ZN    ZN B  31                CL    CL B  32     1555   1555  2.23  
LINK        ZN    ZN D  31                 NE2 HIS D  10     1555   1555  2.00  
LINK        ZN    ZN D  31                CL    CL D  32     1555   1555  2.21  
LINK        ZN    ZN B  31                 NE2 HIS B  10     1555   2555  1.99  
LINK        ZN    ZN B  31                 NE2 HIS B  10     1555   3555  1.99  
LINK        ZN    ZN B  31                CL    CL B  32     1555   2555  2.23  
LINK        ZN    ZN B  31                CL    CL B  32     1555   3555  2.23  
LINK        ZN    ZN D  31                 NE2 HIS D  10     1555   2555  2.00  
LINK        ZN    ZN D  31                 NE2 HIS D  10     1555   3555  2.00  
LINK        ZN    ZN D  31                CL    CL D  32     1555   2555  2.21  
LINK        ZN    ZN D  31                CL    CL D  32     1555   3555  2.21  
SITE     1 AC1  2 HIS B  10   CL B  32                                          
SITE     1 AC2  2 HIS D  10   CL D  32                                          
SITE     1 AC3  2 HIS B  10   ZN B  31                                          
SITE     1 AC4  2 HIS D  10   ZN D  31                                          
SITE     1 AC5  7 LEU B  17  CYS C   6  ILE C  10  CYS C  11                    
SITE     2 AC5  7 HIS D   5  LEU D  11  ALA D  14                               
SITE     1 AC6  9 GLU B  13  TYR B  16  LEU B  17  HIS D   5                    
SITE     2 AC6  9 SER D   9  HIS D  10  GLU D  13  ALA D  14                    
SITE     3 AC6  9 LEU D  17                                                     
SITE     1 AC7  8 ILE A   2  TYR B  26  THR B  27  ASP B  28                    
SITE     2 AC7  8 GLY D  20  GLU D  21  GLY D  23  HOH D  51                    
SITE     1 AC8  9 CYS A   6  SER A   9  ILE A  10  CYS A  11                    
SITE     2 AC8  9 HOH A  58  HIS B   5  LEU B  11  ALA B  14                    
SITE     3 AC8  9 LEU D  17                                                     
SITE     1 AC9  8 LEU A  13  TYR A  14  VAL B  18  LEU C  13                    
SITE     2 AC9  8 TYR C  14  GLU C  17  VAL D  18  HOH D  38                    
CRYST1   77.490   77.490   38.910  90.00  90.00 120.00 H 3          18          
ORIGX1      1.000000  0.000000  0.000000        0.00000                         
ORIGX2      0.000000  1.000000  0.000000        0.00000                         
ORIGX3      0.000000  0.000000  1.000000        0.00000                         
SCALE1      0.012905  0.007451  0.000000        0.00000                         
SCALE2      0.000000  0.014901  0.000000        0.00000                         
SCALE3      0.000000  0.000000  0.025700        0.00000                         
ATOM      1  N   GLY A   1      -7.776  17.786  14.972  1.00 26.83           N  
ATOM      2  CA  GLY A   1      -7.777  17.654  13.489  1.00 25.20           C  
ATOM      3  C   GLY A   1      -8.017  16.200  13.097  1.00 24.11           C  
ATOM      4  O   GLY A   1      -8.316  15.337  13.930  1.00 24.09           O  
ATOM      5  N   ILE A   2      -7.660  15.857  11.867  1.00 21.63           N  
ATOM      6  CA  ILE A   2      -7.874  14.505  11.349  1.00 19.58           C  
ATOM      7  C   ILE A   2      -7.122  13.442  12.106  1.00 19.55           C  
ATOM      8  O   ILE A   2      -7.697  12.343  12.283  1.00 17.81           O  
ATOM      9  CB  ILE A   2      -7.532  14.449   9.854  1.00 18.48           C  
ATOM     10  CG1 ILE A   2      -8.105  13.153   9.257  1.00 18.27           C  
ATOM     11  CG2 ILE A   2      -6.038  14.552   9.598  1.00 19.51           C  
ATOM     12  CD1 ILE A   2      -7.963  13.107   7.748  1.00 18.75           C  
ATOM     13  N   VAL A   3      -5.911  13.634  12.578  1.00 19.48           N  
ATOM     14  CA  VAL A   3      -5.216  12.594  13.340  1.00 22.08           C  
ATOM     15  C   VAL A   3      -5.932  12.341  14.659  1.00 21.85           C  
ATOM     16  O   VAL A   3      -6.253  11.200  15.030  1.00 21.19           O  
ATOM     17  CB  VAL A   3      -3.736  12.978  13.534  1.00 24.16           C  
ATOM     18  CG1 VAL A   3      -3.077  12.087  14.568  1.00 26.64           C  
ATOM     19  CG2 VAL A   3      -2.994  12.910  12.197  1.00 24.81           C  
ATOM     20  N   GLU A   4      -6.311  13.419  15.366  1.00 22.78           N  
ATOM     21  CA  GLU A   4      -7.012  13.180  16.631  1.00 23.77           C  
ATOM     22  C   GLU A   4      -8.381  12.614  16.361  1.00 23.34           C  
ATOM     23  O   GLU A   4      -8.908  11.837  17.175  1.00 26.05           O  
ATOM     24  CB  GLU A   4      -7.134  14.471  17.443  1.00 25.39           C  
ATOM     25  CG  GLU A   4      -5.706  14.821  17.984  0.00 20.00           C  
ATOM     26  CD  GLU A   4      -5.882  16.030  18.867  0.00 20.00           C  
ATOM     27  OE1 GLU A   4      -6.965  16.605  18.854  0.00 20.00           O  
ATOM     28  OE2 GLU A   4      -4.936  16.383  19.555  0.00 20.00           O  
ATOM     29  N   GLN A   5      -9.084  12.960  15.283  1.00 19.71           N  
ATOM     30  CA  GLN A   5     -10.379  12.385  15.031  1.00 20.17           C  
ATOM     31  C   GLN A   5     -10.340  10.928  14.569  1.00 17.40           C  
ATOM     32  O   GLN A   5     -11.218  10.116  14.863  1.00 19.57           O  
ATOM     33  CB  GLN A   5     -11.106  13.207  13.952  1.00 22.51           C  
ATOM     34  CG  GLN A   5     -12.570  12.887  13.884  1.00 25.75           C  
ATOM     35  CD  GLN A   5     -13.370  13.595  14.979  1.00 27.31           C  
ATOM     36  OE1 GLN A   5     -12.775  14.612  15.620  0.00 20.00           O  
ATOM     37  NE2 GLN A   5     -14.545  13.290  15.211  0.00 20.00           N  
ATOM     38  N   CYS A   6      -9.300  10.606  13.768  1.00 16.14           N  
ATOM     39  CA  CYS A   6      -9.359   9.348  13.035  1.00 16.04           C  
ATOM     40  C   CYS A   6      -8.247   8.381  13.355  1.00 15.82           C  
ATOM     41  O   CYS A   6      -8.271   7.224  12.868  1.00 16.71           O  
ATOM     42  CB  CYS A   6      -9.375   9.644  11.519  1.00 15.60           C  
ATOM     43  SG  CYS A   6     -10.818  10.589  10.984  1.00 17.57           S  
ATOM     44  N   CYS A   7      -7.283   8.755  14.157  1.00 15.45           N  
ATOM     45  CA  CYS A   7      -6.252   7.809  14.580  1.00 16.01           C  
ATOM     46  C   CYS A   7      -6.585   7.302  15.972  1.00 18.83           C  
ATOM     47  O   CYS A   7      -6.008   6.251  16.316  1.00 20.55           O  
ATOM     48  CB  CYS A   7      -4.859   8.368  14.549  1.00 16.60           C  
ATOM     49  SG  CYS A   7      -4.383   8.744  12.842  1.00 17.36           S  
ATOM     50  N   THR A   8      -7.517   7.928  16.660  1.00 20.41           N  
ATOM     51  CA  THR A   8      -7.981   7.455  17.967  1.00 22.63           C  
ATOM     52  C   THR A   8      -9.205   6.585  17.896  1.00 23.80           C  
ATOM     53  O   THR A   8      -9.536   5.795  18.818  1.00 26.90           O  
ATOM     54  CB  THR A   8      -8.311   8.676  18.851  1.00 23.46           C  
ATOM     55  OG1 THR A   8      -9.364   9.388  18.207  1.00 25.28           O  
ATOM     56  CG2 THR A   8      -7.092   9.553  18.982  1.00 25.33           C  
ATOM     57  N   SER A   9      -9.992   6.706  16.830  1.00 21.56           N  
ATOM     58  CA  SER A   9     -11.077   5.765  16.562  1.00 23.08           C  
ATOM     59  C   SER A   9     -11.411   5.815  15.075  1.00 21.44           C  
ATOM     60  O   SER A   9     -10.806   6.656  14.397  1.00 22.16           O  
ATOM     61  CB  SER A   9     -12.290   6.038  17.447  1.00 27.10           C  
ATOM     62  OG  SER A   9     -12.881   7.239  17.064  1.00 29.57           O  
ATOM     63  N   ILE A  10     -11.973   4.751  14.528  1.00 20.23           N  
ATOM     64  CA  ILE A  10     -12.079   4.543  13.110  1.00 20.33           C  
ATOM     65  C   ILE A  10     -12.990   5.551  12.450  1.00 20.06           C  
ATOM     66  O   ILE A  10     -14.103   5.878  12.928  1.00 20.95           O  
ATOM     67  CB  ILE A  10     -12.626   3.130  12.769  1.00 21.58           C  
ATOM     68  CG1 ILE A  10     -11.642   2.088  13.309  1.00 23.55           C  
ATOM     69  CG2 ILE A  10     -12.894   2.957  11.287  1.00 24.16           C  
ATOM     70  CD1 ILE A  10     -12.175   0.663  13.195  1.00 24.13           C  
ATOM     71  N   CYS A  11     -12.525   6.127  11.377  1.00 16.75           N  
ATOM     72  CA  CYS A  11     -13.271   7.002  10.508  1.00 15.67           C  
ATOM     73  C   CYS A  11     -13.647   6.229   9.261  1.00 16.43           C  
ATOM     74  O   CYS A  11     -12.777   5.725   8.532  1.00 19.22           O  
ATOM     75  CB  CYS A  11     -12.493   8.224  10.052  1.00 15.57           C  
ATOM     76  SG  CYS A  11     -12.375   9.359  11.484  1.00 17.21           S  
ATOM     77  N   SER A  12     -14.931   6.189   8.902  1.00 15.55           N  
ATOM     78  CA  SER A  12     -15.386   5.573   7.679  1.00 13.29           C  
ATOM     79  C   SER A  12     -15.043   6.482   6.501  1.00 13.47           C  
ATOM     80  O   SER A  12     -14.707   7.667   6.709  1.00 13.58           O  
ATOM     81  CB  SER A  12     -16.909   5.358   7.606  1.00 15.79           C  
ATOM     82  OG  SER A  12     -17.520   6.658   7.679  1.00 15.63           O  
ATOM     83  N   LEU A  13     -15.292   6.038   5.267  1.00 14.28           N  
ATOM     84  CA  LEU A  13     -15.083   6.868   4.098  1.00 12.64           C  
ATOM     85  C   LEU A  13     -16.083   8.030   4.089  1.00 12.23           C  
ATOM     86  O   LEU A  13     -15.731   9.104   3.649  1.00 12.29           O  
ATOM     87  CB  LEU A  13     -15.170   6.154   2.760  1.00 13.31           C  
ATOM     88  CG  LEU A  13     -14.076   5.095   2.491  1.00 13.32           C  
ATOM     89  CD1 LEU A  13     -14.297   4.475   1.128  1.00 15.46           C  
ATOM     90  CD2 LEU A  13     -12.687   5.720   2.661  1.00 15.27           C  
ATOM     91  N   TYR A  14     -17.235   7.824   4.741  1.00 12.82           N  
ATOM     92  CA  TYR A  14     -18.207   8.935   4.807  1.00 12.27           C  
ATOM     93  C   TYR A  14     -17.672  10.032   5.682  1.00 11.77           C  
ATOM     94  O   TYR A  14     -17.809  11.219   5.338  1.00 13.26           O  
ATOM     95  CB  TYR A  14     -19.555   8.395   5.332  1.00 13.59           C  
ATOM     96  CG  TYR A  14     -20.214   7.331   4.492  1.00 13.27           C  
ATOM     97  CD1 TYR A  14     -21.016   7.729   3.443  1.00 14.65           C  
ATOM     98  CD2 TYR A  14     -20.060   5.994   4.785  1.00 15.58           C  
ATOM     99  CE1 TYR A  14     -21.622   6.793   2.627  1.00 18.23           C  
ATOM    100  CE2 TYR A  14     -20.684   5.043   3.975  1.00 17.15           C  
ATOM    101  CZ  TYR A  14     -21.440   5.474   2.930  1.00 18.00           C  
ATOM    102  OH  TYR A  14     -22.086   4.524   2.096  1.00 22.49           O  
ATOM    103  N   GLN A  15     -17.050   9.725   6.796  1.00 12.54           N  
ATOM    104  CA  GLN A  15     -16.444  10.688   7.680  1.00 11.84           C  
ATOM    105  C   GLN A  15     -15.228  11.330   7.005  1.00 13.70           C  
ATOM    106  O   GLN A  15     -15.082  12.540   7.011  1.00 13.32           O  
ATOM    107  CB  GLN A  15     -15.986   9.994   8.968  1.00 15.78           C  
ATOM    108  CG  GLN A  15     -17.147   9.582   9.841  1.00 19.31           C  
ATOM    109  CD  GLN A  15     -16.664   8.670  10.954  1.00 23.18           C  
ATOM    110  OE1 GLN A  15     -16.546   7.464  10.824  1.00 20.94           O  
ATOM    111  NE2 GLN A  15     -16.434   9.395  12.038  1.00 26.04           N  
ATOM    112  N   LEU A  16     -14.402  10.534   6.301  1.00 12.04           N  
ATOM    113  CA  LEU A  16     -13.242  11.122   5.650  1.00 12.96           C  
ATOM    114  C   LEU A  16     -13.547  12.063   4.491  1.00 13.28           C  
ATOM    115  O   LEU A  16     -12.770  12.953   4.198  1.00 14.09           O  
ATOM    116  CB  LEU A  16     -12.318   9.976   5.219  1.00 14.03           C  
ATOM    117  CG  LEU A  16     -11.622   9.226   6.329  1.00 13.90           C  
ATOM    118  CD1 LEU A  16     -10.816   8.038   5.751  1.00 17.01           C  
ATOM    119  CD2 LEU A  16     -10.698  10.157   7.089  1.00 15.22           C  
ATOM    120  N   GLU A  17     -14.718  11.946   3.864  1.00 13.14           N  
ATOM    121  CA  GLU A  17     -15.105  12.816   2.778  1.00 12.61           C  
ATOM    122  C   GLU A  17     -15.204  14.251   3.242  1.00 14.02           C  
ATOM    123  O   GLU A  17     -15.097  15.143   2.409  1.00 14.99           O  
ATOM    124  CB  GLU A  17     -16.419  12.298   2.200  1.00 12.57           C  
ATOM    125  CG  GLU A  17     -16.690  12.899   0.854  1.00 13.77           C  
ATOM    126  CD  GLU A  17     -17.994  12.472   0.186  1.00 14.74           C  
ATOM    127  OE1 GLU A  17     -18.924  12.141   0.925  1.00 15.15           O  
ATOM    128  OE2 GLU A  17     -18.016  12.421  -1.060  1.00 16.75           O  
ATOM    129  N   ASN A  18     -15.411  14.439   4.552  1.00 14.52           N  
ATOM    130  CA  ASN A  18     -15.365  15.792   5.104  1.00 16.00           C  
ATOM    131  C   ASN A  18     -14.117  16.557   4.756  1.00 16.66           C  
ATOM    132  O   ASN A  18     -14.089  17.769   4.633  1.00 17.77           O  
ATOM    133  CB  ASN A  18     -15.443  15.664   6.621  1.00 17.81           C  
ATOM    134  CG AASN A  18     -16.210  16.761   7.323  0.50 21.02           C  
ATOM    135  CG BASN A  18     -15.390  16.961   7.388  0.50 21.33           C  
ATOM    136  OD1AASN A  18     -16.515  17.751   6.658  0.50 20.06           O  
ATOM    137  OD1BASN A  18     -16.268  17.816   7.232  0.50 21.92           O  
ATOM    138  ND2AASN A  18     -16.460  16.511   8.596  0.50 21.88           N  
ATOM    139  ND2BASN A  18     -14.390  17.150   8.232  0.50 20.38           N  
ATOM    140  N   TYR A  19     -12.970  15.859   4.588  1.00 15.76           N  
ATOM    141  CA  TYR A  19     -11.670  16.480   4.372  1.00 16.43           C  
ATOM    142  C   TYR A  19     -11.345  16.694   2.921  1.00 15.69           C  
ATOM    143  O   TYR A  19     -10.247  17.199   2.577  1.00 17.81           O  
ATOM    144  CB  TYR A  19     -10.567  15.692   5.104  1.00 17.07           C  
ATOM    145  CG  TYR A  19     -10.827  15.461   6.569  1.00 18.39           C  
ATOM    146  CD1 TYR A  19     -10.511  16.478   7.492  1.00 20.89           C  
ATOM    147  CD2 TYR A  19     -11.499  14.366   7.092  1.00 19.22           C  
ATOM    148  CE1 TYR A  19     -10.790  16.308   8.826  1.00 23.10           C  
ATOM    149  CE2 TYR A  19     -11.752  14.186   8.422  1.00 21.28           C  
ATOM    150  CZ  TYR A  19     -11.400  15.186   9.318  1.00 23.52           C  
ATOM    151  OH  TYR A  19     -11.691  14.994  10.653  1.00 26.59           O  
ATOM    152  N   CYS A  20     -12.154  16.311   1.969  1.00 14.54           N  
ATOM    153  CA  CYS A  20     -11.878  16.557   0.560  1.00 12.99           C  
ATOM    154  C   CYS A  20     -11.966  18.046   0.236  1.00 16.36           C  
ATOM    155  O   CYS A  20     -12.565  18.837   0.954  1.00 18.03           O  
ATOM    156  CB  CYS A  20     -12.902  15.783  -0.281  1.00 13.73           C  
ATOM    157  SG  CYS A  20     -12.895  14.003   0.056  1.00 13.87           S  
ATOM    158  N   ASN A  21     -11.304  18.428  -0.869  1.00 18.14           N  
ATOM    159  CA  ASN A  21     -11.344  19.823  -1.281  1.00 21.38           C  
ATOM    160  C   ASN A  21     -12.517  20.095  -2.225  1.00 24.15           C  
ATOM    161  O   ASN A  21     -12.826  21.230  -2.562  1.00 26.81           O  
ATOM    162  CB  ASN A  21     -10.026  20.152  -1.980  1.00 20.98           C  
ATOM    163  CG  ASN A  21      -8.969  20.446  -0.946  1.00 24.20           C  
ATOM    164  OD1 ASN A  21      -7.774  20.304  -1.184  0.00 26.39           O  
ATOM    165  ND2 ASN A  21      -9.437  20.874   0.239  0.00 20.00           N  
ATOM    166  OXT ASN A  21     -13.200  19.189  -2.685  1.00 21.75           O  
TER     167      ASN A  21                                                      
ATOM    168  N   PHE B   1       6.777   8.369  17.654  0.00 20.00           N  
ATOM    169  CA  PHE B   1       5.695   8.955  16.861  0.00 20.00           C  
ATOM    170  C   PHE B   1       5.187   7.997  15.776  1.00 25.15           C  
ATOM    171  O   PHE B   1       4.431   8.360  14.894  1.00 23.05           O  
ATOM    172  CB  PHE B   1       6.224  10.231  16.209  0.00 20.00           C  
ATOM    173  CG  PHE B   1       5.143  11.268  16.163  0.00 20.00           C  
ATOM    174  CD1 PHE B   1       3.814  10.882  15.966  0.00 20.00           C  
ATOM    175  CD2 PHE B   1       5.463  12.598  16.326  0.00 20.00           C  
ATOM    176  CE1 PHE B   1       2.818  11.848  15.937  0.00 20.00           C  
ATOM    177  CE2 PHE B   1       4.459  13.557  16.296  0.00 20.00           C  
ATOM    178  CZ  PHE B   1       3.140  13.193  16.101  0.00 20.00           C  
ATOM    179  N   VAL B   2       5.649   6.731  15.857  1.00 26.71           N  
ATOM    180  CA  VAL B   2       5.397   5.782  14.756  1.00 24.38           C  
ATOM    181  C   VAL B   2       3.904   5.372  14.636  1.00 23.27           C  
ATOM    182  O   VAL B   2       3.380   5.193  13.545  1.00 18.13           O  
ATOM    183  CB  VAL B   2       6.261   4.554  15.016  1.00 25.57           C  
ATOM    184  CG1AVAL B   2       5.861   3.915  16.346  0.50 23.08           C  
ATOM    185  CG1BVAL B   2       6.124   3.629  13.545  0.50 25.50           C  
ATOM    186  CG2AVAL B   2       6.095   3.551  13.904  0.50 24.48           C  
ATOM    187  CG2BVAL B   2       7.797   5.041  14.741  0.50 25.11           C  
ATOM    188  N   ASN B   3       3.088   5.152  15.676  1.00 22.28           N  
ATOM    189  CA  ASN B   3       1.678   4.820  15.508  1.00 21.80           C  
ATOM    190  C   ASN B   3       0.942   5.851  14.671  1.00 20.58           C  
ATOM    191  O   ASN B   3       0.222   5.493  13.702  1.00 17.63           O  
ATOM    192  CB  ASN B   3       0.939   4.774  16.858  1.00 23.73           C  
ATOM    193  CG  ASN B   3       1.368   3.497  17.576  1.00 27.61           C  
ATOM    194  OD1 ASN B   3       2.001   2.630  16.893  0.00 20.00           O  
ATOM    195  ND2 ASN B   3       1.307   3.516  18.849  0.00 20.00           N  
ATOM    196  N   GLN B   4       1.150   7.107  14.951  1.00 19.20           N  
ATOM    197  CA  GLN B   4       0.496   8.176  14.211  1.00 18.17           C  
ATOM    198  C   GLN B   4       0.979   8.194  12.758  1.00 17.56           C  
ATOM    199  O   GLN B   4       0.234   8.491  11.823  1.00 16.02           O  
ATOM    200  CB  GLN B   4       0.734   9.551  14.822  1.00 22.41           C  
ATOM    201  CG  GLN B   4       0.090   9.626  16.220  0.00 20.00           C  
ATOM    202  CD  GLN B   4       0.054  11.055  16.752  0.00 20.00           C  
ATOM    203  OE1 GLN B   4      -0.650  11.279  17.745  0.00 20.00           O  
ATOM    204  NE2 GLN B   4       0.769  11.952  16.084  0.00 20.00           N  
ATOM    205  N   HIS B   5       2.259   7.963  12.541  1.00 13.97           N  
ATOM    206  CA  HIS B   5       2.879   7.919  11.250  1.00 15.50           C  
ATOM    207  C   HIS B   5       2.233   6.858  10.400  1.00 14.94           C  
ATOM    208  O   HIS B   5       1.882   7.077   9.246  1.00 14.21           O  
ATOM    209  CB  HIS B   5       4.361   7.607  11.441  1.00 16.85           C  
ATOM    210  CG AHIS B   5       5.138   8.082  10.242  0.50 16.02           C  
ATOM    211  CG BHIS B   5       4.918   7.426   9.955  0.50 19.50           C  
ATOM    212  ND1AHIS B   5       4.916   9.275   9.633  0.50 15.64           N  
ATOM    213  ND1BHIS B   5       5.063   8.471   9.066  0.50 20.62           N  
ATOM    214  CD2AHIS B   5       6.180   7.431   9.575  0.50 14.93           C  
ATOM    215  CD2BHIS B   5       5.233   6.309   9.249  0.50 19.57           C  
ATOM    216  CE1AHIS B   5       5.807   9.338   8.624  0.50 15.89           C  
ATOM    217  CE1BHIS B   5       5.475   8.020   7.906  0.50 20.76           C  
ATOM    218  NE2AHIS B   5       6.576   8.247   8.566  0.50 15.73           N  
ATOM    219  NE2BHIS B   5       5.576   6.706   7.975  0.50 20.84           N  
ATOM    220  N   LEU B   6       2.083   5.663  10.948  1.00 13.33           N  
ATOM    221  CA  LEU B   6       1.436   4.565  10.249  1.00 13.23           C  
ATOM    222  C   LEU B   6      -0.011   4.897  10.003  1.00 13.95           C  
ATOM    223  O   LEU B   6      -0.484   4.664   8.870  1.00 13.87           O  
ATOM    224  CB  LEU B   6       1.573   3.269  11.075  1.00 15.57           C  
ATOM    225  CG  LEU B   6       3.019   2.835  11.281  1.00 16.31           C  
ATOM    226  CD1 LEU B   6       3.057   1.601  12.192  1.00 19.93           C  
ATOM    227  CD2 LEU B   6       3.697   2.473   9.978  1.00 20.59           C  
ATOM    228  N   CYS B   7      -0.736   5.419  10.993  1.00 12.98           N  
ATOM    229  CA  CYS B   7      -2.138   5.806  10.754  1.00 12.49           C  
ATOM    230  C   CYS B   7      -2.236   6.766   9.599  1.00 13.53           C  
ATOM    231  O   CYS B   7      -3.077   6.578   8.686  1.00 12.30           O  
ATOM    232  CB  CYS B   7      -2.645   6.436  12.035  1.00 13.02           C  
ATOM    233  SG  CYS B   7      -4.350   6.977  11.818  1.00 15.94           S  
ATOM    234  N   GLY B   8      -1.406   7.811   9.548  1.00 13.50           N  
ATOM    235  CA  GLY B   8      -1.467   8.806   8.498  1.00 12.90           C  
ATOM    236  C   GLY B   8      -1.284   8.239   7.116  1.00 13.61           C  
ATOM    237  O   GLY B   8      -1.882   8.678   6.111  1.00 13.41           O  
ATOM    238  N   SER B   9      -0.409   7.233   6.985  1.00 13.13           N  
ATOM    239  CA  SER B   9      -0.145   6.581   5.721  1.00 13.81           C  
ATOM    240  C   SER B   9      -1.414   6.008   5.150  1.00 14.73           C  
ATOM    241  O   SER B   9      -1.786   6.116   3.970  1.00 16.04           O  
ATOM    242  CB  SER B   9       0.848   5.403   5.888  1.00 18.09           C  
ATOM    243  OG  SER B   9       0.881   4.758   4.629  1.00 22.46           O  
ATOM    244  N   HIS B  10      -2.248   5.430   5.993  1.00 11.28           N  
ATOM    245  CA  HIS B  10      -3.521   4.859   5.621  1.00 11.16           C  
ATOM    246  C   HIS B  10      -4.546   5.945   5.466  1.00 12.06           C  
ATOM    247  O   HIS B  10      -5.336   5.809   4.522  1.00 13.62           O  
ATOM    248  CB  HIS B  10      -3.914   3.819   6.659  1.00 11.15           C  
ATOM    249  CG  HIS B  10      -3.105   2.586   6.612  1.00 11.22           C  
ATOM    250  ND1 HIS B  10      -3.425   1.456   5.893  1.00 15.36           N  
ATOM    251  CD2 HIS B  10      -1.943   2.315   7.257  1.00 10.85           C  
ATOM    252  CE1 HIS B  10      -2.469   0.535   6.082  1.00 15.29           C  
ATOM    253  NE2 HIS B  10      -1.570   1.030   6.929  1.00 11.71           N  
ATOM    254  N   LEU B  11      -4.591   6.988   6.280  1.00 11.06           N  
ATOM    255  CA  LEU B  11      -5.551   8.059   6.066  1.00 11.00           C  
ATOM    256  C   LEU B  11      -5.362   8.633   4.693  1.00 10.75           C  
ATOM    257  O   LEU B  11      -6.373   8.910   4.015  1.00 12.33           O  
ATOM    258  CB  LEU B  11      -5.380   9.181   7.096  1.00 13.39           C  
ATOM    259  CG  LEU B  11      -5.785   8.927   8.526  1.00 15.08           C  
ATOM    260  CD1 LEU B  11      -5.422  10.109   9.387  1.00 15.67           C  
ATOM    261  CD2 LEU B  11      -7.294   8.699   8.538  1.00 16.66           C  
ATOM    262  N   VAL B  12      -4.129   8.880   4.217  1.00 11.40           N  
ATOM    263  CA  VAL B  12      -3.975   9.537   2.916  1.00 11.91           C  
ATOM    264  C   VAL B  12      -4.503   8.646   1.795  1.00 11.14           C  
ATOM    265  O   VAL B  12      -4.990   9.157   0.787  1.00 11.02           O  
ATOM    266  CB  VAL B  12      -2.548  10.055   2.659  1.00 14.98           C  
ATOM    267  CG1 VAL B  12      -2.184  11.095   3.719  1.00 14.91           C  
ATOM    268  CG2 VAL B  12      -1.524   8.993   2.622  1.00 17.59           C  
ATOM    269  N   GLU B  13      -4.304   7.339   1.880  1.00 11.70           N  
ATOM    270  CA  GLU B  13      -4.809   6.398   0.895  1.00 12.47           C  
ATOM    271  C   GLU B  13      -6.340   6.448   0.832  1.00 12.08           C  
ATOM    272  O   GLU B  13      -6.948   6.424  -0.230  1.00 12.34           O  
ATOM    273  CB  GLU B  13      -4.338   4.999   1.300  1.00 15.07           C  
ATOM    274  CG AGLU B  13      -3.012   4.602   0.635  0.67 20.30           C  
ATOM    275  CG BGLU B  13      -4.805   3.872   0.496  0.33 18.75           C  
ATOM    276  CD AGLU B  13      -2.934   5.231  -0.736  0.67 19.47           C  
ATOM    277  CD BGLU B  13      -4.323   2.551   1.022  0.00 20.00           C  
ATOM    278  OE1AGLU B  13      -3.880   5.105  -1.495  0.67 20.40           O  
ATOM    279  OE1BGLU B  13      -3.527   2.799   1.951  0.00 20.00           O  
ATOM    280  OE2AGLU B  13      -1.908   5.846  -1.037  0.67 21.26           O  
ATOM    281  OE2BGLU B  13      -4.264   1.347   0.908  0.00 20.00           O  
ATOM    282  N   ALA B  14      -6.962   6.519   2.031  1.00 11.65           N  
ATOM    283  CA  ALA B  14      -8.423   6.543   2.066  1.00 11.18           C  
ATOM    284  C   ALA B  14      -8.988   7.884   1.565  1.00 10.76           C  
ATOM    285  O   ALA B  14      -9.991   7.868   0.858  1.00 10.90           O  
ATOM    286  CB  ALA B  14      -8.911   6.292   3.487  1.00 11.47           C  
ATOM    287  N   LEU B  15      -8.317   8.976   1.907  1.00 11.49           N  
ATOM    288  CA  LEU B  15      -8.698  10.290   1.397  1.00  9.64           C  
ATOM    289  C   LEU B  15      -8.571  10.287  -0.120  1.00 10.61           C  
ATOM    290  O   LEU B  15      -9.432  10.700  -0.875  1.00 10.95           O  
ATOM    291  CB  LEU B  15      -7.805  11.386   1.952  1.00 10.98           C  
ATOM    292  CG  LEU B  15      -8.106  11.632   3.433  1.00 11.98           C  
ATOM    293  CD1 LEU B  15      -7.019  12.461   4.084  1.00 13.35           C  
ATOM    294  CD2 LEU B  15      -9.459  12.302   3.552  1.00 13.68           C  
ATOM    295  N   TYR B  16      -7.462   9.722  -0.632  1.00  9.82           N  
ATOM    296  CA  TYR B  16      -7.276   9.605  -2.071  1.00  9.62           C  
ATOM    297  C   TYR B  16      -8.472   8.921  -2.708  1.00 10.27           C  
ATOM    298  O   TYR B  16      -9.029   9.390  -3.740  1.00 11.63           O  
ATOM    299  CB  TYR B  16      -5.974   8.807  -2.375  1.00 10.46           C  
ATOM    300  CG  TYR B  16      -5.849   8.578  -3.863  1.00 10.04           C  
ATOM    301  CD1 TYR B  16      -5.592   9.591  -4.764  1.00 12.15           C  
ATOM    302  CD2 TYR B  16      -5.993   7.307  -4.409  1.00 10.46           C  
ATOM    303  CE1 TYR B  16      -5.517   9.357  -6.117  1.00 12.38           C  
ATOM    304  CE2 TYR B  16      -5.894   7.066  -5.733  1.00 10.75           C  
ATOM    305  CZ  TYR B  16      -5.669   8.089  -6.618  1.00 11.55           C  
ATOM    306  OH  TYR B  16      -5.519   7.977  -7.985  1.00 12.73           O  
ATOM    307  N   LEU B  17      -8.892   7.811  -2.181  1.00  9.81           N  
ATOM    308  CA  LEU B  17      -9.970   7.020  -2.731  1.00 11.52           C  
ATOM    309  C   LEU B  17     -11.308   7.743  -2.666  1.00 11.17           C  
ATOM    310  O   LEU B  17     -11.989   7.787  -3.708  1.00 13.15           O  
ATOM    311  CB  LEU B  17     -10.076   5.697  -1.977  1.00 12.22           C  
ATOM    312  CG  LEU B  17     -11.228   4.765  -2.390  1.00 13.22           C  
ATOM    313  CD1 LEU B  17     -11.125   4.287  -3.814  1.00 15.16           C  
ATOM    314  CD2 LEU B  17     -11.233   3.553  -1.449  1.00 14.90           C  
ATOM    315  N   VAL B  18     -11.680   8.226  -1.482  1.00 11.59           N  
ATOM    316  CA  VAL B  18     -13.020   8.868  -1.455  1.00 12.11           C  
ATOM    317  C   VAL B  18     -13.041  10.210  -2.141  1.00 11.24           C  
ATOM    318  O   VAL B  18     -14.065  10.563  -2.738  1.00 13.86           O  
ATOM    319  CB  VAL B  18     -13.485   8.939  -0.015  1.00 12.93           C  
ATOM    320  CG1 VAL B  18     -12.715   9.963   0.801  1.00 13.97           C  
ATOM    321  CG2 VAL B  18     -15.018   9.188   0.033  1.00 13.67           C  
ATOM    322  N   CYS B  19     -11.987  10.996  -2.087  1.00 11.07           N  
ATOM    323  CA  CYS B  19     -12.080  12.332  -2.665  1.00 11.55           C  
ATOM    324  C   CYS B  19     -12.000  12.280  -4.190  1.00 13.36           C  
ATOM    325  O   CYS B  19     -12.495  13.150  -4.895  1.00 13.61           O  
ATOM    326  CB  CYS B  19     -10.928  13.185  -2.119  1.00 12.17           C  
ATOM    327  SG  CYS B  19     -10.996  13.411  -0.323  1.00 11.98           S  
ATOM    328  N   GLY B  20     -11.333  11.333  -4.803  1.00 12.59           N  
ATOM    329  CA  GLY B  20     -11.328  11.305  -6.268  1.00 14.84           C  
ATOM    330  C   GLY B  20     -10.717  12.562  -6.853  1.00 15.75           C  
ATOM    331  O   GLY B  20      -9.781  13.166  -6.353  1.00 13.77           O  
ATOM    332  N   GLU B  21     -11.389  13.089  -7.897  1.00 16.23           N  
ATOM    333  CA  GLU B  21     -10.963  14.305  -8.579  1.00 18.59           C  
ATOM    334  C   GLU B  21     -10.939  15.543  -7.732  1.00 16.17           C  
ATOM    335  O   GLU B  21     -10.214  16.489  -8.111  1.00 19.01           O  
ATOM    336  CB  GLU B  21     -11.921  14.513  -9.789  1.00 20.62           C  
ATOM    337  CG  GLU B  21     -11.586  13.500 -10.865  1.00 23.50           C  
ATOM    338  CD  GLU B  21     -12.491  13.614 -12.006  0.00 20.00           C  
ATOM    339  OE1 GLU B  21     -13.377  14.450 -11.903  0.00 20.00           O  
ATOM    340  OE2 GLU B  21     -12.260  13.006 -13.051  0.00 20.00           O  
ATOM    341  N   ARG B  22     -11.645  15.604  -6.610  1.00 15.03           N  
ATOM    342  CA  ARG B  22     -11.645  16.705  -5.704  1.00 15.66           C  
ATOM    343  C   ARG B  22     -10.284  16.921  -5.073  1.00 15.23           C  
ATOM    344  O   ARG B  22      -9.859  18.013  -4.661  1.00 17.50           O  
ATOM    345  CB  ARG B  22     -12.673  16.561  -4.581  1.00 16.09           C  
ATOM    346  CG  ARG B  22     -14.091  16.595  -5.136  1.00 17.06           C  
ATOM    347  CD  ARG B  22     -15.072  16.187  -4.071  1.00 16.84           C  
ATOM    348  NE  ARG B  22     -15.027  14.762  -3.766  1.00 16.07           N  
ATOM    349  CZ  ARG B  22     -15.850  14.094  -3.006  1.00 15.47           C  
ATOM    350  NH1 ARG B  22     -16.814  14.807  -2.372  1.00 16.40           N  
ATOM    351  NH2 ARG B  22     -15.810  12.811  -2.743  1.00 15.81           N  
ATOM    352  N   GLY B  23      -9.572  15.781  -4.881  1.00 13.80           N  
ATOM    353  CA  GLY B  23      -8.298  15.846  -4.153  1.00 14.35           C  
ATOM    354  C   GLY B  23      -8.563  16.324  -2.719  1.00 13.89           C  
ATOM    355  O   GLY B  23      -9.669  16.335  -2.177  1.00 13.75           O  
ATOM    356  N   PHE B  24      -7.481  16.621  -2.017  1.00 12.91           N  
ATOM    357  CA  PHE B  24      -7.489  16.976  -0.618  1.00 12.09           C  
ATOM    358  C   PHE B  24      -6.205  17.590  -0.147  1.00 12.96           C  
ATOM    359  O   PHE B  24      -5.209  17.492  -0.882  1.00 13.85           O  
ATOM    360  CB  PHE B  24      -7.728  15.735   0.270  1.00 13.22           C  
ATOM    361  CG  PHE B  24      -6.675  14.641   0.154  1.00 11.54           C  
ATOM    362  CD1 PHE B  24      -6.727  13.754  -0.888  1.00 11.10           C  
ATOM    363  CD2 PHE B  24      -5.664  14.573   1.082  1.00 12.55           C  
ATOM    364  CE1 PHE B  24      -5.768  12.767  -1.034  1.00 12.28           C  
ATOM    365  CE2 PHE B  24      -4.703  13.564   0.959  1.00 12.37           C  
ATOM    366  CZ  PHE B  24      -4.761  12.657  -0.098  1.00 14.22           C  
ATOM    367  N   PHE B  25      -6.206  18.285   0.978  1.00 14.11           N  
ATOM    368  CA  PHE B  25      -5.002  18.816   1.585  1.00 17.34           C  
ATOM    369  C   PHE B  25      -4.713  17.910   2.773  1.00 17.15           C  
ATOM    370  O   PHE B  25      -5.670  17.445   3.441  1.00 17.92           O  
ATOM    371  CB  PHE B  25      -5.183  20.261   2.083  1.00 20.04           C  
ATOM    372  CG  PHE B  25      -4.892  21.197   0.966  0.00 20.00           C  
ATOM    373  CD1 PHE B  25      -5.768  21.334  -0.138  0.00 20.00           C  
ATOM    374  CD2 PHE B  25      -3.767  21.950   1.054  0.00 20.00           C  
ATOM    375  CE1 PHE B  25      -5.433  22.269  -1.132  0.00 20.00           C  
ATOM    376  CE2 PHE B  25      -3.446  22.862   0.078  0.00 20.00           C  
ATOM    377  CZ  PHE B  25      -4.277  23.036  -1.019  0.00 20.00           C  
ATOM    378  N   TYR B  26      -3.480  17.617   3.083  1.00 15.72           N  
ATOM    379  CA  TYR B  26      -3.044  16.908   4.296  1.00 16.11           C  
ATOM    380  C   TYR B  26      -1.867  17.633   4.983  1.00 19.16           C  
ATOM    381  O   TYR B  26      -0.710  17.491   4.611  1.00 18.62           O  
ATOM    382  CB  TYR B  26      -2.623  15.494   3.882  1.00 15.86           C  
ATOM    383  CG  TYR B  26      -2.516  14.615   5.074  1.00 15.75           C  
ATOM    384  CD1 TYR B  26      -3.655  14.003   5.590  1.00 18.20           C  
ATOM    385  CD2 TYR B  26      -1.277  14.382   5.671  1.00 16.06           C  
ATOM    386  CE1 TYR B  26      -3.558  13.166   6.689  1.00 17.43           C  
ATOM    387  CE2 TYR B  26      -1.179  13.546   6.770  1.00 17.73           C  
ATOM    388  CZ  TYR B  26      -2.311  12.937   7.278  1.00 18.08           C  
ATOM    389  OH  TYR B  26      -2.216  12.079   8.357  1.00 22.64           O  
ATOM    390  N   THR B  27      -2.207  18.459   6.005  1.00 22.36           N  
ATOM    391  CA  THR B  27      -1.193  19.357   6.573  1.00 26.58           C  
ATOM    392  C   THR B  27      -1.490  19.732   8.039  1.00 30.78           C  
ATOM    393  O   THR B  27      -2.349  19.154   8.695  1.00 31.16           O  
ATOM    394  CB  THR B  27      -1.160  20.613   5.705  1.00 25.42           C  
ATOM    395  OG1 THR B  27      -2.093  21.565   6.222  1.00 26.88           O  
ATOM    396  CG2 THR B  27      -1.566  20.257   4.268  0.00 20.00           C  
ATOM    397  N   ASP B  28      -0.712  20.721   8.527  1.00 36.19           N  
ATOM    398  CA  ASP B  28      -1.058  21.285   9.808  1.00 39.70           C  
ATOM    399  C   ASP B  28       0.100  21.287  10.783  1.00 41.63           C  
ATOM    400  O   ASP B  28       1.023  20.484  10.733  1.00 42.93           O  
ATOM    401  CB  ASP B  28      -2.216  20.484  10.398  1.00 41.05           C  
ATOM    402  CG  ASP B  28      -3.416  21.389  10.556  1.00 41.29           C  
ATOM    403  OD1 ASP B  28      -4.046  21.713   9.561  1.00 41.13           O  
ATOM    404  OD2 ASP B  28      -3.699  21.759  11.677  1.00 41.75           O  
ATOM    405  N   LYS B  29       0.023  22.264  11.680  1.00 42.36           N  
ATOM    406  CA  LYS B  29       0.973  22.395  12.744  0.00 20.00           C  
ATOM    407  C   LYS B  29       0.289  22.170  14.078  0.00 20.00           C  
ATOM    408  O   LYS B  29      -0.619  22.890  14.469  0.00 20.00           O  
ATOM    409  CB  LYS B  29       1.518  23.790  12.646  0.00 20.00           C  
ATOM    410  CG  LYS B  29       1.044  24.408  11.335  0.00 20.00           C  
ATOM    411  CD  LYS B  29       0.907  25.905  11.418  0.00 20.00           C  
ATOM    412  CE  LYS B  29       2.031  26.597  10.672  0.00 20.00           C  
ATOM    413  NZ  LYS B  29       1.903  28.031  10.821  0.00 20.00           N  
ATOM    414  N   THR B  30       0.763  21.095  14.721  0.00 20.00           N  
ATOM    415  CA  THR B  30       0.261  20.754  16.044  0.00 20.00           C  
ATOM    416  C   THR B  30       1.128  19.679  16.700  0.00 20.00           C  
ATOM    417  O   THR B  30       1.806  18.909  16.035  0.00 20.00           O  
ATOM    418  CB  THR B  30      -1.177  20.246  15.901  0.00 20.00           C  
ATOM    419  OG1 THR B  30      -1.657  19.837  17.186  0.00 20.00           O  
ATOM    420  CG2 THR B  30      -1.216  19.045  14.955  0.00 20.00           C  
ATOM    421  OXT THR B  30       1.178  19.547  17.913  0.00 20.00           O  
TER     422      THR B  30                                                      
ATOM    423  N   GLY C   1      -0.358  19.892 -13.287  1.00 16.17           N  
ATOM    424  CA  GLY C   1      -0.318  19.377 -11.908  1.00 15.18           C  
ATOM    425  C   GLY C   1       0.424  18.053 -11.811  1.00 15.41           C  
ATOM    426  O   GLY C   1       0.950  17.553 -12.784  1.00 13.88           O  
ATOM    427  N   ILE C   2       0.451  17.512 -10.620  1.00 11.73           N  
ATOM    428  CA  ILE C   2       1.199  16.298 -10.294  1.00 12.15           C  
ATOM    429  C   ILE C   2       0.760  15.127 -11.148  1.00 12.22           C  
ATOM    430  O   ILE C   2       1.651  14.321 -11.535  1.00 13.42           O  
ATOM    431  CB  ILE C   2       1.103  15.983  -8.788  1.00 12.84           C  
ATOM    432  CG1 ILE C   2       2.140  14.901  -8.430  1.00 11.89           C  
ATOM    433  CG2 ILE C   2      -0.262  15.511  -8.340  1.00 11.09           C  
ATOM    434  CD1 ILE C   2       2.170  14.615  -6.921  1.00 14.82           C  
ATOM    435  N   VAL C   3      -0.507  14.968 -11.473  1.00 10.98           N  
ATOM    436  CA  VAL C   3      -0.915  13.826 -12.309  1.00 13.24           C  
ATOM    437  C   VAL C   3      -0.381  13.995 -13.710  1.00 14.89           C  
ATOM    438  O   VAL C   3       0.151  13.054 -14.336  1.00 15.58           O  
ATOM    439  CB  VAL C   3      -2.440  13.641 -12.298  1.00 13.79           C  
ATOM    440  CG1 VAL C   3      -2.878  12.547 -13.274  1.00 14.18           C  
ATOM    441  CG2 VAL C   3      -2.924  13.394 -10.858  1.00 13.24           C  
ATOM    442  N   GLU C   4      -0.486  15.195 -14.264  1.00 13.88           N  
ATOM    443  CA  GLU C   4      -0.021  15.436 -15.637  1.00 15.81           C  
ATOM    444  C   GLU C   4       1.485  15.352 -15.669  1.00 16.36           C  
ATOM    445  O   GLU C   4       2.066  14.929 -16.707  1.00 18.75           O  
ATOM    446  CB  GLU C   4      -0.506  16.795 -16.100  1.00 15.82           C  
ATOM    447  CG  GLU C   4      -1.984  16.958 -16.236  1.00 17.76           C  
ATOM    448  CD  GLU C   4      -2.737  17.127 -14.912  1.00 15.92           C  
ATOM    449  OE1 GLU C   4      -2.231  17.916 -14.083  1.00 16.03           O  
ATOM    450  OE2 GLU C   4      -3.758  16.483 -14.780  1.00 18.99           O  
ATOM    451  N   GLN C   5       2.202  15.785 -14.675  1.00 14.40           N  
ATOM    452  CA  GLN C   5       3.642  15.818 -14.640  1.00 16.07           C  
ATOM    453  C   GLN C   5       4.281  14.496 -14.287  1.00 17.68           C  
ATOM    454  O   GLN C   5       5.332  14.129 -14.792  1.00 19.30           O  
ATOM    455  CB  GLN C   5       4.119  16.876 -13.614  1.00 17.51           C  
ATOM    456  CG  GLN C   5       5.640  16.980 -13.617  1.00 20.31           C  
ATOM    457  CD  GLN C   5       6.224  17.986 -12.668  1.00 24.17           C  
ATOM    458  OE1 GLN C   5       5.659  18.480 -11.683  1.00 22.16           O  
ATOM    459  NE2 GLN C   5       7.496  18.336 -12.957  1.00 27.05           N  
ATOM    460  N   CYS C   6       3.692  13.756 -13.334  1.00 15.29           N  
ATOM    461  CA  CYS C   6       4.285  12.591 -12.742  1.00 14.22           C  
ATOM    462  C   CYS C   6       3.581  11.264 -13.006  1.00 14.99           C  
ATOM    463  O   CYS C   6       4.234  10.285 -12.582  1.00 16.35           O  
ATOM    464  CB  CYS C   6       4.373  12.847 -11.218  1.00 15.40           C  
ATOM    465  SG  CYS C   6       5.276  14.385 -10.826  1.00 15.27           S  
ATOM    466  N   CYS C   7       2.546  11.245 -13.802  1.00 16.14           N  
ATOM    467  CA  CYS C   7       2.006   9.931 -14.199  1.00 18.14           C  
ATOM    468  C   CYS C   7       2.352   9.615 -15.646  1.00 23.18           C  
ATOM    469  O   CYS C   7       2.092   8.483 -16.055  1.00 24.73           O  
ATOM    470  CB  CYS C   7       0.490   9.828 -14.046  1.00 15.76           C  
ATOM    471  SG  CYS C   7       0.038   9.925 -12.332  1.00 14.86           S  
ATOM    472  N   THR C   8       2.920  10.588 -16.335  1.00 24.08           N  
ATOM    473  CA  THR C   8       3.321  10.474 -17.719  1.00 26.99           C  
ATOM    474  C   THR C   8       4.768  10.040 -17.742  1.00 29.19           C  
ATOM    475  O   THR C   8       5.107   9.027 -18.335  1.00 32.83           O  
ATOM    476  CB  THR C   8       3.167  11.833 -18.434  1.00 25.64           C  
ATOM    477  OG1 THR C   8       3.772  12.817 -17.590  1.00 26.04           O  
ATOM    478  CG2 THR C   8       1.705  12.121 -18.711  1.00 26.94           C  
ATOM    479  N   SER C   9       5.610  10.711 -16.968  1.00 29.53           N  
ATOM    480  CA  SER C   9       7.025  10.377 -16.862  1.00 28.77           C  
ATOM    481  C   SER C   9       7.383  10.395 -15.388  1.00 28.86           C  
ATOM    482  O   SER C   9       6.672  11.105 -14.639  1.00 28.56           O  
ATOM    483  CB  SER C   9       7.939  11.310 -17.659  1.00 31.24           C  
ATOM    484  OG  SER C   9       7.505  12.657 -17.550  1.00 32.22           O  
ATOM    485  N   ILE C  10       8.367   9.647 -14.950  1.00 27.05           N  
ATOM    486  CA  ILE C  10       8.696   9.579 -13.545  1.00 27.03           C  
ATOM    487  C   ILE C  10       9.142  10.977 -13.071  1.00 25.04           C  
ATOM    488  O   ILE C  10       9.720  11.761 -13.833  1.00 25.16           O  
ATOM    489  CB  ILE C  10       9.799   8.625 -13.047  1.00 30.48           C  
ATOM    490  CG1 ILE C  10      10.801   8.384 -14.163  1.00 31.61           C  
ATOM    491  CG2 ILE C  10       9.198   7.342 -12.493  1.00 34.02           C  
ATOM    492  CD1 ILE C  10      11.731   9.489 -14.538  1.00 33.28           C  
ATOM    493  N   CYS C  11       8.695  11.285 -11.860  1.00 19.73           N  
ATOM    494  CA  CYS C  11       9.205  12.402 -11.135  1.00 18.08           C  
ATOM    495  C   CYS C  11      10.194  12.061 -10.038  1.00 18.92           C  
ATOM    496  O   CYS C  11      10.021  11.085  -9.311  1.00 20.11           O  
ATOM    497  CB  CYS C  11       8.042  13.199 -10.453  1.00 18.54           C  
ATOM    498  SG  CYS C  11       7.094  14.117 -11.652  1.00 16.22           S  
ATOM    499  N   SER C  12      11.229  12.867  -9.903  1.00 17.64           N  
ATOM    500  CA  SER C  12      12.196  12.717  -8.837  1.00 20.43           C  
ATOM    501  C   SER C  12      11.595  13.171  -7.511  1.00 19.81           C  
ATOM    502  O   SER C  12      10.537  13.870  -7.495  1.00 17.22           O  
ATOM    503  CB  SER C  12      13.459  13.552  -9.123  1.00 21.91           C  
ATOM    504  OG  SER C  12      13.106  14.921  -9.070  1.00 22.88           O  
ATOM    505  N   LEU C  13      12.248  12.870  -6.402  1.00 20.65           N  
ATOM    506  CA  LEU C  13      11.755  13.360  -5.116  1.00 20.29           C  
ATOM    507  C   LEU C  13      11.714  14.883  -5.085  1.00 20.60           C  
ATOM    508  O   LEU C  13      10.857  15.500  -4.471  1.00 19.85           O  
ATOM    509  CB  LEU C  13      12.689  12.849  -4.011  1.00 21.95           C  
ATOM    510  CG  LEU C  13      12.729  11.321  -3.921  1.00 24.04           C  
ATOM    511  CD1 LEU C  13      13.365  10.830  -2.617  1.00 26.03           C  
ATOM    512  CD2 LEU C  13      11.340  10.688  -3.983  1.00 25.35           C  
ATOM    513  N   TYR C  14      12.718  15.485  -5.747  1.00 20.60           N  
ATOM    514  CA  TYR C  14      12.807  16.938  -5.780  1.00 19.77           C  
ATOM    515  C   TYR C  14      11.596  17.553  -6.484  1.00 18.49           C  
ATOM    516  O   TYR C  14      11.054  18.580  -6.086  1.00 19.85           O  
ATOM    517  CB  TYR C  14      14.093  17.309  -6.529  1.00 24.33           C  
ATOM    518  CG  TYR C  14      14.239  18.787  -6.601  0.00 20.00           C  
ATOM    519  CD1 TYR C  14      13.283  19.607  -6.011  0.00 20.00           C  
ATOM    520  CD2 TYR C  14      15.327  19.358  -7.262  0.00 20.00           C  
ATOM    521  CE1 TYR C  14      13.408  20.985  -6.084  0.00 20.00           C  
ATOM    522  CE2 TYR C  14      15.452  20.737  -7.333  0.00 20.00           C  
ATOM    523  CZ  TYR C  14      14.497  21.547  -6.748  0.00 20.00           C  
ATOM    524  OH  TYR C  14      14.615  22.920  -6.813  0.00 20.00           O  
ATOM    525  N   GLN C  15      11.203  16.906  -7.595  1.00 17.82           N  
ATOM    526  CA  GLN C  15      10.042  17.373  -8.331  1.00 16.19           C  
ATOM    527  C   GLN C  15       8.754  17.184  -7.525  1.00 16.77           C  
ATOM    528  O   GLN C  15       7.880  18.040  -7.496  1.00 16.28           O  
ATOM    529  CB  GLN C  15       9.959  16.583  -9.636  1.00 17.33           C  
ATOM    530  CG  GLN C  15      10.904  17.121 -10.711  1.00 21.74           C  
ATOM    531  CD  GLN C  15      10.838  16.225 -11.926  1.00 22.76           C  
ATOM    532  OE1 GLN C  15      11.028  15.023 -11.876  1.00 22.58           O  
ATOM    533  NE2 GLN C  15      10.537  16.881 -13.067  1.00 27.47           N  
ATOM    534  N   LEU C  16       8.743  16.107  -6.722  1.00 14.97           N  
ATOM    535  CA  LEU C  16       7.573  15.873  -5.868  1.00 13.75           C  
ATOM    536  C   LEU C  16       7.462  16.898  -4.766  1.00 14.37           C  
ATOM    537  O   LEU C  16       6.372  17.234  -4.325  1.00 14.10           O  
ATOM    538  CB  LEU C  16       7.601  14.479  -5.217  1.00 14.08           C  
ATOM    539  CG  LEU C  16       7.442  13.349  -6.221  1.00 15.56           C  
ATOM    540  CD1 LEU C  16       7.774  12.030  -5.488  1.00 16.33           C  
ATOM    541  CD2 LEU C  16       6.121  13.272  -6.917  1.00 16.39           C  
ATOM    542  N   GLU C  17       8.557  17.534  -4.322  1.00 14.61           N  
ATOM    543  CA  GLU C  17       8.516  18.543  -3.288  1.00 16.31           C  
ATOM    544  C   GLU C  17       7.744  19.796  -3.723  1.00 14.91           C  
ATOM    545  O   GLU C  17       7.329  20.555  -2.851  1.00 16.47           O  
ATOM    546  CB  GLU C  17       9.920  18.979  -2.896  1.00 19.53           C  
ATOM    547  CG  GLU C  17      10.614  17.946  -2.027  1.00 26.64           C  
ATOM    548  CD  GLU C  17      11.768  18.644  -1.325  1.00 32.60           C  
ATOM    549  OE1 GLU C  17      12.558  19.227  -2.095  1.00 33.38           O  
ATOM    550  OE2 GLU C  17      11.813  18.657  -0.077  1.00 36.11           O  
ATOM    551  N   ASN C  18       7.509  19.957  -5.026  1.00 15.09           N  
ATOM    552  CA  ASN C  18       6.679  21.074  -5.466  1.00 14.99           C  
ATOM    553  C   ASN C  18       5.228  20.917  -4.993  1.00 16.10           C  
ATOM    554  O   ASN C  18       4.446  21.883  -5.030  1.00 15.01           O  
ATOM    555  CB  ASN C  18       6.673  21.286  -6.962  1.00 16.16           C  
ATOM    556  CG  ASN C  18       8.012  21.852  -7.442  1.00 19.08           C  
ATOM    557  OD1 ASN C  18       8.464  21.413  -8.486  1.00 23.10           O  
ATOM    558  ND2 ASN C  18       8.497  22.807  -6.699  1.00 20.06           N  
ATOM    559  N   TYR C  19       4.863  19.728  -4.525  1.00 13.41           N  
ATOM    560  CA  TYR C  19       3.480  19.480  -4.082  1.00 13.44           C  
ATOM    561  C   TYR C  19       3.409  19.330  -2.591  1.00 12.98           C  
ATOM    562  O   TYR C  19       2.337  19.063  -2.006  1.00 14.53           O  
ATOM    563  CB  TYR C  19       2.820  18.295  -4.828  1.00 12.67           C  
ATOM    564  CG  TYR C  19       2.966  18.494  -6.317  1.00 12.53           C  
ATOM    565  CD1 TYR C  19       2.146  19.311  -7.043  1.00 13.10           C  
ATOM    566  CD2 TYR C  19       3.989  17.872  -7.030  1.00 13.95           C  
ATOM    567  CE1 TYR C  19       2.315  19.509  -8.414  1.00 13.80           C  
ATOM    568  CE2 TYR C  19       4.174  18.045  -8.377  1.00 12.78           C  
ATOM    569  CZ  TYR C  19       3.347  18.859  -9.079  1.00 13.28           C  
ATOM    570  OH  TYR C  19       3.432  19.088 -10.425  1.00 17.04           O  
ATOM    571  N   CYS C  20       4.439  19.734  -1.863  1.00 12.88           N  
ATOM    572  CA  CYS C  20       4.411  19.835  -0.419  1.00 14.22           C  
ATOM    573  C   CYS C  20       3.822  21.184  -0.022  1.00 15.67           C  
ATOM    574  O   CYS C  20       3.908  22.124  -0.814  1.00 17.57           O  
ATOM    575  CB  CYS C  20       5.796  19.735   0.222  1.00 12.25           C  
ATOM    576  SG  CYS C  20       6.673  18.165  -0.104  1.00 14.13           S  
ATOM    577  N  AASN C  21       3.364  21.296   1.221  0.50 14.70           N  
ATOM    578  N  BASN C  21       3.158  21.202   1.115  0.50 16.28           N  
ATOM    579  CA AASN C  21       2.918  22.612   1.724  0.50 16.78           C  
ATOM    580  CA BASN C  21       2.567  22.441   1.627  0.50 19.54           C  
ATOM    581  C  AASN C  21       4.166  23.373   2.137  0.50 15.25           C  
ATOM    582  C  BASN C  21       3.653  23.307   2.231  0.50 19.24           C  
ATOM    583  O  AASN C  21       5.257  22.783   2.296  0.50 15.96           O  
ATOM    584  O  BASN C  21       4.504  22.832   3.013  0.50 21.19           O  
ATOM    585  CB AASN C  21       1.922  22.439   2.865  0.50 18.07           C  
ATOM    586  CB BASN C  21       1.506  22.018   2.638  0.50 20.60           C  
ATOM    587  CG AASN C  21       0.677  21.689   2.450  0.50 20.92           C  
ATOM    588  CG BASN C  21       0.851  23.182   3.356  0.50 22.87           C  
ATOM    589  OD1AASN C  21       0.177  20.824   3.178  0.50 22.25           O  
ATOM    590  OD1BASN C  21       1.138  23.303   4.553  0.50 25.16           O  
ATOM    591  ND2AASN C  21       0.142  21.985   1.277  0.50 22.92           N  
ATOM    592  ND2BASN C  21       0.056  23.919   2.620  0.50 23.47           N  
ATOM    593  OXTAASN C  21       4.004  24.411   2.857  0.50 19.46           O  
ATOM    594  OXTBASN C  21       3.432  24.554   2.192  0.50 20.37           O  
TER     595      ASN C  21                                                      
ATOM    596  N   PHE D   1      -8.861   5.195 -17.321  1.00 25.89           N  
ATOM    597  CA  PHE D   1      -8.550   5.907 -16.049  1.00 24.44           C  
ATOM    598  C   PHE D   1      -7.938   4.969 -15.011  1.00 23.77           C  
ATOM    599  O   PHE D   1      -7.626   5.509 -13.946  1.00 21.05           O  
ATOM    600  CB  PHE D   1      -9.795   6.565 -15.450  1.00 28.00           C  
ATOM    601  CG  PHE D   1     -10.224   7.765 -16.251  1.00 29.91           C  
ATOM    602  CD1 PHE D   1      -9.522   8.951 -16.165  1.00 30.42           C  
ATOM    603  CD2 PHE D   1     -11.308   7.655 -17.099  1.00 29.87           C  
ATOM    604  CE1 PHE D   1      -9.930  10.039 -16.926  1.00 32.28           C  
ATOM    605  CE2 PHE D   1     -11.732   8.746 -17.851  1.00 31.80           C  
ATOM    606  CZ  PHE D   1     -11.028   9.922 -17.749  1.00 32.21           C  
ATOM    607  N   VAL D   2      -7.935   3.644 -15.220  1.00 22.00           N  
ATOM    608  CA  VAL D   2      -7.357   2.797 -14.151  1.00 21.10           C  
ATOM    609  C   VAL D   2      -5.853   2.963 -13.983  1.00 19.13           C  
ATOM    610  O   VAL D   2      -5.469   3.095 -12.813  1.00 15.66           O  
ATOM    611  CB  VAL D   2      -7.665   1.316 -14.300  1.00 22.14           C  
ATOM    612  CG1 VAL D   2      -7.150   0.450 -13.155  1.00 21.92           C  
ATOM    613  CG2 VAL D   2      -9.197   1.177 -14.344  1.00 20.85           C  
ATOM    614  N   ASN D   3      -5.041   3.117 -15.039  1.00 17.52           N  
ATOM    615  CA  ASN D   3      -3.630   3.396 -14.760  1.00 18.41           C  
ATOM    616  C   ASN D   3      -3.440   4.730 -14.038  1.00 16.18           C  
ATOM    617  O   ASN D   3      -2.585   4.907 -13.225  1.00 14.77           O  
ATOM    618  CB  ASN D   3      -2.869   3.418 -16.084  1.00 19.95           C  
ATOM    619  CG  ASN D   3      -2.929   2.060 -16.722  1.00 25.32           C  
ATOM    620  OD1 ASN D   3      -3.014   1.021 -16.051  0.00 20.00           O  
ATOM    621  ND2 ASN D   3      -2.894   2.069 -18.055  0.00 20.00           N  
ATOM    622  N   GLN D   4      -4.258   5.709 -14.380  1.00 15.24           N  
ATOM    623  CA  GLN D   4      -4.140   7.001 -13.712  1.00 14.83           C  
ATOM    624  C   GLN D   4      -4.496   6.911 -12.218  1.00 14.35           C  
ATOM    625  O   GLN D   4      -4.941   7.854 -11.626  1.00 15.04           O  
ATOM    626  CB  GLN D   4      -5.073   7.980 -14.403  1.00 16.45           C  
ATOM    627  CG  GLN D   4      -4.360   8.860 -15.413  0.00 20.00           C  
ATOM    628  CD  GLN D   4      -5.179  10.109 -15.642  0.00 20.00           C  
ATOM    629  OE1 GLN D   4      -6.227  10.331 -15.051  0.00 20.00           O  
ATOM    630  NE2 GLN D   4      -4.650  10.954 -16.541  0.00 20.00           N  
ATOM    631  N   HIS D   5      -5.505   6.093 -11.897  1.00 12.89           N  
ATOM    632  CA  HIS D   5      -5.899   5.861 -10.532  1.00 13.68           C  
ATOM    633  C   HIS D   5      -4.782   5.153  -9.776  1.00 12.50           C  
ATOM    634  O   HIS D   5      -4.452   5.547  -8.631  1.00 11.77           O  
ATOM    635  CB  HIS D   5      -7.163   4.961 -10.440  1.00 13.59           C  
ATOM    636  CG  HIS D   5      -7.500   4.671  -9.001  1.00 16.58           C  
ATOM    637  ND1 HIS D   5      -8.253   5.546  -8.236  1.00 17.30           N  
ATOM    638  CD2 HIS D   5      -7.158   3.622  -8.224  1.00 17.04           C  
ATOM    639  CE1 HIS D   5      -8.326   4.970  -7.021  1.00 17.48           C  
ATOM    640  NE2 HIS D   5      -7.667   3.845  -6.976  1.00 19.67           N  
ATOM    641  N   LEU D   6      -4.176   4.143 -10.381  1.00 13.10           N  
ATOM    642  CA  LEU D   6      -3.043   3.502  -9.691  1.00 13.39           C  
ATOM    643  C   LEU D   6      -1.882   4.468  -9.477  1.00 12.14           C  
ATOM    644  O   LEU D   6      -1.282   4.494  -8.387  1.00 12.24           O  
ATOM    645  CB  LEU D   6      -2.607   2.295 -10.502  1.00 14.38           C  
ATOM    646  CG  LEU D   6      -3.671   1.227 -10.761  1.00 18.11           C  
ATOM    647  CD1 LEU D   6      -3.078   0.096 -11.586  1.00 19.12           C  
ATOM    648  CD2 LEU D   6      -4.190   0.684  -9.458  1.00 21.17           C  
ATOM    649  N   CYS D   7      -1.559   5.252 -10.491  1.00 12.33           N  
ATOM    650  CA  CYS D   7      -0.467   6.229 -10.285  1.00 11.99           C  
ATOM    651  C   CYS D   7      -0.775   7.153  -9.128  1.00 12.35           C  
ATOM    652  O   CYS D   7       0.085   7.409  -8.262  1.00 12.50           O  
ATOM    653  CB  CYS D   7      -0.375   6.977 -11.613  1.00 11.13           C  
ATOM    654  SG  CYS D   7       0.899   8.292 -11.477  1.00 14.60           S  
ATOM    655  N   GLY D   8      -1.967   7.749  -9.097  1.00 11.40           N  
ATOM    656  CA  GLY D   8      -2.311   8.674  -8.019  1.00 12.66           C  
ATOM    657  C   GLY D   8      -2.206   8.109  -6.643  1.00 11.78           C  
ATOM    658  O   GLY D   8      -1.749   8.798  -5.707  1.00 12.23           O  
ATOM    659  N   SER D   9      -2.539   6.808  -6.481  1.00 11.72           N  
ATOM    660  CA  SER D   9      -2.485   6.195  -5.176  1.00 11.70           C  
ATOM    661  C   SER D   9      -1.033   6.218  -4.725  1.00 12.05           C  
ATOM    662  O   SER D   9      -0.756   6.446  -3.562  1.00 13.41           O  
ATOM    663  CB  SER D   9      -2.993   4.764  -5.300  1.00 14.48           C  
ATOM    664  OG  SER D   9      -2.696   4.020  -4.162  1.00 17.52           O  
ATOM    665  N   HIS D  10      -0.071   5.910  -5.589  1.00 10.94           N  
ATOM    666  CA  HIS D  10       1.342   5.912  -5.223  1.00 11.16           C  
ATOM    667  C   HIS D  10       1.849   7.321  -5.098  1.00 11.80           C  
ATOM    668  O   HIS D  10       2.696   7.553  -4.226  1.00 13.85           O  
ATOM    669  CB  HIS D  10       2.081   5.083  -6.274  1.00 11.44           C  
ATOM    670  CG  HIS D  10       1.811   3.618  -6.136  1.00 11.74           C  
ATOM    671  ND1 HIS D  10       2.690   2.812  -5.439  1.00 13.87           N  
ATOM    672  CD2 HIS D  10       0.804   2.849  -6.591  1.00 11.54           C  
ATOM    673  CE1 HIS D  10       2.191   1.554  -5.499  1.00 14.11           C  
ATOM    674  NE2 HIS D  10       1.075   1.556  -6.203  1.00 10.18           N  
ATOM    675  N   LEU D  11       1.344   8.262  -5.872  1.00 11.30           N  
ATOM    676  CA  LEU D  11       1.765   9.645  -5.672  1.00 11.20           C  
ATOM    677  C   LEU D  11       1.452  10.145  -4.280  1.00 11.63           C  
ATOM    678  O   LEU D  11       2.289  10.812  -3.648  1.00 11.19           O  
ATOM    679  CB  LEU D  11       1.104  10.603  -6.661  1.00 11.93           C  
ATOM    680  CG  LEU D  11       1.617  10.524  -8.098  1.00 12.32           C  
ATOM    681  CD1 LEU D  11       0.712  11.339  -9.032  1.00 14.57           C  
ATOM    682  CD2 LEU D  11       3.063  10.928  -8.169  1.00 15.35           C  
ATOM    683  N   VAL D  12       0.251   9.899  -3.794  1.00 12.28           N  
ATOM    684  CA  VAL D  12      -0.133  10.435  -2.484  1.00 11.29           C  
ATOM    685  C   VAL D  12       0.726   9.836  -1.408  1.00 11.75           C  
ATOM    686  O   VAL D  12       1.129  10.525  -0.431  1.00 11.08           O  
ATOM    687  CB  VAL D  12      -1.640  10.193  -2.242  1.00 14.00           C  
ATOM    688  CG1AVAL D  12      -2.044  10.170  -0.794  0.50 13.48           C  
ATOM    689  CG1BVAL D  12      -2.119   8.787  -2.092  0.50 15.43           C  
ATOM    690  CG2AVAL D  12      -2.447  11.177  -3.108  0.50  7.92           C  
ATOM    691  CG2BVAL D  12      -1.992  10.908  -0.927  0.50 18.88           C  
ATOM    692  N   GLU D  13       1.081   8.533  -1.484  1.00 10.80           N  
ATOM    693  CA  GLU D  13       1.942   7.964  -0.464  1.00 12.09           C  
ATOM    694  C   GLU D  13       3.335   8.564  -0.567  1.00 11.30           C  
ATOM    695  O   GLU D  13       3.973   8.792   0.469  1.00 12.25           O  
ATOM    696  CB  GLU D  13       2.032   6.456  -0.610  1.00 12.69           C  
ATOM    697  CG  GLU D  13       2.736   5.783   0.579  1.00 20.10           C  
ATOM    698  CD  GLU D  13       2.105   5.912   1.954  1.00 23.13           C  
ATOM    699  OE1 GLU D  13       0.885   6.063   1.982  1.00 21.56           O  
ATOM    700  OE2 GLU D  13       2.701   5.891   3.031  1.00 28.01           O  
ATOM    701  N   ALA D  14       3.797   8.788  -1.799  1.00 10.60           N  
ATOM    702  CA  ALA D  14       5.124   9.406  -1.947  1.00 11.69           C  
ATOM    703  C   ALA D  14       5.129  10.805  -1.383  1.00 11.76           C  
ATOM    704  O   ALA D  14       6.087  11.169  -0.675  1.00 11.91           O  
ATOM    705  CB  ALA D  14       5.574   9.374  -3.401  1.00 11.95           C  
ATOM    706  N   LEU D  15       4.081  11.600  -1.603  1.00 11.24           N  
ATOM    707  CA  LEU D  15       4.042  12.941  -1.025  1.00 11.08           C  
ATOM    708  C   LEU D  15       3.981  12.930   0.489  1.00 11.28           C  
ATOM    709  O   LEU D  15       4.686  13.658   1.190  1.00 10.99           O  
ATOM    710  CB  LEU D  15       2.808  13.709  -1.484  1.00 11.56           C  
ATOM    711  CG  LEU D  15       2.792  14.073  -2.965  1.00 12.30           C  
ATOM    712  CD1 LEU D  15       1.523  14.851  -3.240  1.00 13.09           C  
ATOM    713  CD2 LEU D  15       4.005  14.869  -3.385  1.00 12.23           C  
ATOM    714  N   TYR D  16       3.257  11.927   1.052  1.00 11.08           N  
ATOM    715  CA  TYR D  16       3.214  11.783   2.481  1.00 11.26           C  
ATOM    716  C   TYR D  16       4.629  11.615   3.040  1.00 11.18           C  
ATOM    717  O   TYR D  16       4.984  12.249   4.035  1.00 13.63           O  
ATOM    718  CB  TYR D  16       2.315  10.599   2.834  1.00 12.79           C  
ATOM    719  CG  TYR D  16       2.180  10.351   4.307  1.00 12.49           C  
ATOM    720  CD1 TYR D  16       1.500  11.221   5.145  1.00 15.23           C  
ATOM    721  CD2 TYR D  16       2.718   9.208   4.897  1.00 12.97           C  
ATOM    722  CE1 TYR D  16       1.373  10.984   6.504  1.00 15.43           C  
ATOM    723  CE2 TYR D  16       2.588   8.987   6.245  1.00 12.45           C  
ATOM    724  CZ  TYR D  16       1.918   9.833   7.038  1.00 13.28           C  
ATOM    725  OH  TYR D  16       1.741   9.645   8.390  1.00 14.70           O  
ATOM    726  N   LEU D  17       5.413  10.754   2.413  1.00 11.09           N  
ATOM    727  CA  LEU D  17       6.760  10.483   2.900  1.00 12.24           C  
ATOM    728  C   LEU D  17       7.731  11.596   2.595  1.00 13.20           C  
ATOM    729  O   LEU D  17       8.551  11.945   3.449  1.00 14.27           O  
ATOM    730  CB  LEU D  17       7.244   9.161   2.276  1.00 14.46           C  
ATOM    731  CG  LEU D  17       6.437   7.926   2.652  1.00 16.19           C  
ATOM    732  CD1 LEU D  17       6.972   6.726   1.871  1.00 16.68           C  
ATOM    733  CD2 LEU D  17       6.566   7.704   4.150  1.00 19.42           C  
ATOM    734  N   VAL D  18       7.724  12.156   1.397  1.00 11.96           N  
ATOM    735  CA  VAL D  18       8.646  13.237   1.025  1.00 13.35           C  
ATOM    736  C   VAL D  18       8.393  14.490   1.833  1.00 14.29           C  
ATOM    737  O   VAL D  18       9.356  15.177   2.247  1.00 15.79           O  
ATOM    738  CB  VAL D  18       8.465  13.535  -0.466  1.00 14.27           C  
ATOM    739  CG1 VAL D  18       9.111  14.888  -0.858  1.00 16.17           C  
ATOM    740  CG2 VAL D  18       9.065  12.453  -1.360  1.00 15.53           C  
ATOM    741  N   CYS D  19       7.143  14.871   2.031  1.00 13.55           N  
ATOM    742  CA  CYS D  19       6.801  16.167   2.600  1.00 14.65           C  
ATOM    743  C   CYS D  19       6.972  16.192   4.106  1.00 17.10           C  
ATOM    744  O   CYS D  19       7.035  17.317   4.614  1.00 19.00           O  
ATOM    745  CB  CYS D  19       5.397  16.589   2.137  1.00 15.08           C  
ATOM    746  SG  CYS D  19       5.330  16.727   0.326  1.00 12.29           S  
ATOM    747  N   GLY D  20       6.926  15.074   4.804  1.00 18.22           N  
ATOM    748  CA  GLY D  20       7.162  15.150   6.252  1.00 21.29           C  
ATOM    749  C   GLY D  20       6.114  15.969   6.968  1.00 20.54           C  
ATOM    750  O   GLY D  20       4.937  15.999   6.612  1.00 18.26           O  
ATOM    751  N   GLU D  21       6.570  16.706   8.012  1.00 22.62           N  
ATOM    752  CA  GLU D  21       5.613  17.462   8.814  1.00 24.60           C  
ATOM    753  C   GLU D  21       4.910  18.579   8.069  1.00 23.42           C  
ATOM    754  O   GLU D  21       3.807  18.887   8.503  1.00 24.92           O  
ATOM    755  CB  GLU D  21       6.266  17.984  10.091  1.00 27.89           C  
ATOM    756  CG  GLU D  21       7.221  19.127  10.044  1.00 34.57           C  
ATOM    757  CD  GLU D  21       8.182  18.964  11.230  1.00 37.71           C  
ATOM    758  OE1 GLU D  21       7.715  18.475  12.293  1.00 40.14           O  
ATOM    759  OE2 GLU D  21       9.357  19.313  11.021  1.00 41.31           O  
ATOM    760  N   ARG D  22       5.462  19.072   6.976  1.00 23.36           N  
ATOM    761  CA  ARG D  22       4.811  20.084   6.178  1.00 22.87           C  
ATOM    762  C   ARG D  22       3.467  19.648   5.633  1.00 20.63           C  
ATOM    763  O   ARG D  22       2.525  20.423   5.453  1.00 20.91           O  
ATOM    764  CB  ARG D  22       5.639  20.381   4.907  1.00 25.86           C  
ATOM    765  CG  ARG D  22       7.052  20.877   5.129  1.00 30.37           C  
ATOM    766  CD  ARG D  22       7.755  21.004   3.779  1.00 31.46           C  
ATOM    767  NE  ARG D  22       8.524  19.798   3.488  1.00 32.34           N  
ATOM    768  CZ  ARG D  22       9.216  19.627   2.366  1.00 33.01           C  
ATOM    769  NH1 ARG D  22       9.193  20.591   1.458  1.00 31.98           N  
ATOM    770  NH2 ARG D  22       9.892  18.493   2.187  1.00 34.69           N  
ATOM    771  N   GLY D  23       3.383  18.349   5.331  1.00 17.95           N  
ATOM    772  CA  GLY D  23       2.242  17.815   4.646  1.00 14.94           C  
ATOM    773  C   GLY D  23       2.276  18.336   3.209  1.00 11.67           C  
ATOM    774  O   GLY D  23       3.268  18.829   2.662  1.00 14.93           O  
ATOM    775  N   PHE D  24       1.149  18.083   2.536  1.00 12.72           N  
ATOM    776  CA  PHE D  24       1.069  18.260   1.095  1.00 11.36           C  
ATOM    777  C   PHE D  24      -0.326  18.619   0.663  1.00 13.56           C  
ATOM    778  O   PHE D  24      -1.320  18.496   1.387  1.00 14.10           O  
ATOM    779  CB  PHE D  24       1.526  16.936   0.421  1.00 11.69           C  
ATOM    780  CG  PHE D  24       0.671  15.735   0.665  1.00 11.51           C  
ATOM    781  CD1 PHE D  24       0.948  14.905   1.743  1.00 11.04           C  
ATOM    782  CD2 PHE D  24      -0.370  15.391  -0.159  1.00 11.76           C  
ATOM    783  CE1 PHE D  24       0.163  13.781   2.009  1.00 10.99           C  
ATOM    784  CE2 PHE D  24      -1.182  14.294   0.061  1.00 12.87           C  
ATOM    785  CZ  PHE D  24      -0.879  13.472   1.149  1.00 12.58           C  
ATOM    786  N   PHE D  25      -0.460  18.937  -0.621  1.00 13.21           N  
ATOM    787  CA  PHE D  25      -1.728  19.170  -1.274  1.00 12.92           C  
ATOM    788  C   PHE D  25      -1.789  18.234  -2.478  1.00 12.43           C  
ATOM    789  O   PHE D  25      -0.795  18.108  -3.226  1.00 13.15           O  
ATOM    790  CB  PHE D  25      -1.924  20.632  -1.650  1.00 14.04           C  
ATOM    791  CG  PHE D  25      -0.945  21.196  -2.630  1.00 14.43           C  
ATOM    792  CD1 PHE D  25       0.267  21.642  -2.164  1.00 14.63           C  
ATOM    793  CD2 PHE D  25      -1.179  21.157  -3.991  1.00 13.50           C  
ATOM    794  CE1 PHE D  25       1.262  22.123  -3.031  1.00 17.95           C  
ATOM    795  CE2 PHE D  25      -0.207  21.652  -4.855  1.00 14.97           C  
ATOM    796  CZ  PHE D  25       0.967  22.114  -4.364  1.00 15.18           C  
ATOM    797  N   TYR D  26      -2.915  17.577  -2.623  1.00 12.14           N  
ATOM    798  CA  TYR D  26      -3.128  16.684  -3.767  1.00 11.37           C  
ATOM    799  C   TYR D  26      -4.307  17.173  -4.555  1.00 12.40           C  
ATOM    800  O   TYR D  26      -5.470  17.136  -4.130  1.00 12.50           O  
ATOM    801  CB  TYR D  26      -3.337  15.219  -3.294  1.00 13.46           C  
ATOM    802  CG  TYR D  26      -3.581  14.300  -4.472  1.00 12.64           C  
ATOM    803  CD1 TYR D  26      -2.517  14.090  -5.358  1.00 12.78           C  
ATOM    804  CD2 TYR D  26      -4.800  13.691  -4.725  1.00 12.33           C  
ATOM    805  CE1 TYR D  26      -2.720  13.321  -6.500  1.00 13.29           C  
ATOM    806  CE2 TYR D  26      -4.968  12.911  -5.853  1.00 11.40           C  
ATOM    807  CZ  TYR D  26      -3.920  12.704  -6.735  1.00 13.21           C  
ATOM    808  OH  TYR D  26      -4.118  11.966  -7.859  1.00 14.59           O  
ATOM    809  N   THR D  27      -4.054  17.692  -5.775  1.00 11.20           N  
ATOM    810  CA  THR D  27      -5.096  18.201  -6.615  1.00 12.09           C  
ATOM    811  C   THR D  27      -5.815  17.151  -7.405  1.00 11.39           C  
ATOM    812  O   THR D  27      -6.847  17.407  -8.007  1.00 14.08           O  
ATOM    813  CB  THR D  27      -4.510  19.186  -7.656  1.00 13.07           C  
ATOM    814  OG1 THR D  27      -3.578  18.422  -8.459  1.00 11.98           O  
ATOM    815  CG2 THR D  27      -3.878  20.350  -6.947  1.00 12.26           C  
ATOM    816  N   ASP D  28      -5.278  15.922  -7.557  1.00 12.96           N  
ATOM    817  CA  ASP D  28      -5.733  14.967  -8.553  1.00 13.28           C  
ATOM    818  C   ASP D  28      -5.618  15.665  -9.917  1.00 12.61           C  
ATOM    819  O   ASP D  28      -4.754  16.556 -10.097  1.00 12.68           O  
ATOM    820  CB  ASP D  28      -7.110  14.384  -8.253  1.00 15.06           C  
ATOM    821  CG  ASP D  28      -7.274  13.045  -9.003  1.00 16.95           C  
ATOM    822  OD1 ASP D  28      -6.677  12.037  -8.608  1.00 18.30           O  
ATOM    823  OD2 ASP D  28      -7.996  13.075 -10.017  1.00 17.10           O  
ATOM    824  N   LYS D  29      -6.407  15.298 -10.909  1.00 13.79           N  
ATOM    825  CA  LYS D  29      -6.254  15.847 -12.245  1.00 14.69           C  
ATOM    826  C   LYS D  29      -6.502  17.348 -12.279  1.00 14.94           C  
ATOM    827  O   LYS D  29      -7.310  17.822 -11.514  1.00 15.73           O  
ATOM    828  CB  LYS D  29      -7.215  15.146 -13.217  1.00 18.86           C  
ATOM    829  CG  LYS D  29      -6.765  13.703 -13.453  1.00 23.40           C  
ATOM    830  CD  LYS D  29      -7.827  12.941 -14.254  1.00 28.04           C  
ATOM    831  CE  LYS D  29      -9.064  12.732 -13.394  1.00 31.73           C  
ATOM    832  NZ  LYS D  29      -8.813  11.698 -12.341  1.00 35.12           N  
ATOM    833  N   THR D  30      -5.784  18.001 -13.165  1.00 15.26           N  
ATOM    834  CA  THR D  30      -6.061  19.427 -13.385  1.00 15.80           C  
ATOM    835  C   THR D  30      -6.255  19.609 -14.877  1.00 18.62           C  
ATOM    836  O   THR D  30      -5.974  18.739 -15.721  1.00 20.71           O  
ATOM    837  CB  THR D  30      -4.953  20.360 -12.900  1.00 16.48           C  
ATOM    838  OG1 THR D  30      -3.795  20.227 -13.745  1.00 17.69           O  
ATOM    839  CG2 THR D  30      -4.546  20.106 -11.465  1.00 15.56           C  
ATOM    840  OXT THR D  30      -6.620  20.755 -15.292  1.00 17.98           O  
TER     841      THR D  30                                                      
HETATM  842  C1  CRS A  22      -8.934   5.663  10.087  1.00 18.48           C  
HETATM  843  C2  CRS A  22      -9.490   5.277   8.871  1.00 18.12           C  
HETATM  844  C3  CRS A  22      -8.614   4.873   7.873  1.00 18.69           C  
HETATM  845  C4  CRS A  22      -7.253   4.851   8.068  1.00 19.52           C  
HETATM  846  C5  CRS A  22      -6.715   5.271   9.284  1.00 19.42           C  
HETATM  847  C6  CRS A  22      -7.566   5.678  10.317  1.00 18.13           C  
HETATM  848  C7  CRS A  22      -9.209   4.425   6.536  1.00 19.81           C  
HETATM  849  O1  CRS A  22      -9.738   6.101  11.124  1.00 17.08           O  
HETATM  850 ZN    ZN B  31       0.000   0.000   7.601  0.33 13.06          ZN  
HETATM  851 CL    CL B  32       0.000   0.000   9.829  0.33 14.48          CL  
HETATM  852  C1  CRS C  22       5.811   9.106  -9.902  1.00 15.97           C  
HETATM  853  C2  CRS C  22       6.667   9.149  -8.844  1.00 17.07           C  
HETATM  854  C3  CRS C  22       6.267   8.344  -7.741  1.00 17.05           C  
HETATM  855  C4  CRS C  22       5.070   7.670  -7.838  1.00 16.33           C  
HETATM  856  C5  CRS C  22       4.217   7.649  -8.900  1.00 17.94           C  
HETATM  857  C6  CRS C  22       4.608   8.444 -10.003  1.00 17.55           C  
HETATM  858  C7  CRS C  22       7.170   8.317  -6.553  1.00 19.51           C  
HETATM  859  O1  CRS C  22       6.225   9.901 -11.001  1.00 18.25           O  
HETATM  860 ZN    ZN D  31       0.000   0.000  -6.845  0.33 12.09          ZN  
HETATM  861 CL    CL D  32       0.000   0.000  -9.053  0.33 12.10          CL  
HETATM  862  C1  CRS D  33       5.586   4.183  -3.976  0.67 30.20           C  
HETATM  863  C2  CRS D  33       5.325   5.298  -3.178  0.67 30.20           C  
HETATM  864  C3  CRS D  33       5.907   5.222  -1.914  0.67 31.52           C  
HETATM  865  C4  CRS D  33       6.675   4.155  -1.464  0.67 31.32           C  
HETATM  866  C5  CRS D  33       6.912   3.057  -2.283  0.67 31.07           C  
HETATM  867  C6  CRS D  33       6.340   3.111  -3.541  0.67 30.88           C  
HETATM  868  C7  CRS D  33       5.754   6.339  -0.914  0.67 31.95           C  
HETATM  869  O1  CRS D  33       5.083   4.134  -5.237  0.67 26.66           O  
HETATM  870  C1  CRS D  34       1.007  16.909   9.018  1.00 42.09           C  
HETATM  871  C2  CRS D  34      -0.261  16.407   8.756  1.00 41.26           C  
HETATM  872  C3  CRS D  34      -1.212  16.305   9.762  1.00 41.29           C  
HETATM  873  C4  CRS D  34      -0.875  16.660  11.059  1.00 41.62           C  
HETATM  874  C5  CRS D  34       0.411  17.119  11.335  1.00 42.16           C  
HETATM  875  C6  CRS D  34       1.363  17.250  10.320  1.00 42.18           C  
HETATM  876  C7  CRS D  34      -2.615  15.791   9.411  1.00 40.71           C  
HETATM  877  O1  CRS D  34       1.909  17.027   7.991  1.00 41.64           O  
HETATM  878  C1 ACRS D  35      12.880  14.021   1.197  0.50 33.23           C  
HETATM  879  C1 BCRS D  35      12.880  14.007   1.210  0.50 34.27           C  
HETATM  880  C2 ACRS D  35      12.755  14.853   0.093  0.50 33.88           C  
HETATM  881  C2 BCRS D  35      13.935  13.115   1.278  0.50 34.25           C  
HETATM  882  C3 ACRS D  35      13.668  14.754  -0.945  0.50 33.82           C  
HETATM  883  C3 BCRS D  35      14.848  13.014   0.238  0.50 34.30           C  
HETATM  884  C4 ACRS D  35      14.707  13.834  -0.888  0.50 33.46           C  
HETATM  885  C4 BCRS D  35      14.695  13.821  -0.884  0.50 34.40           C  
HETATM  886  C5 ACRS D  35      14.835  13.001   0.219  0.50 33.30           C  
HETATM  887  C5 BCRS D  35      13.635  14.719  -0.957  0.50 34.78           C  
HETATM  888  C6 ACRS D  35      13.916  13.105   1.252  0.50 33.26           C  
HETATM  889  C6 BCRS D  35      12.731  14.813   0.090  0.50 34.86           C  
HETATM  890  C7 ACRS D  35      13.552  15.660  -2.169  0.50 33.90           C  
HETATM  891  C7 BCRS D  35      16.001  12.014   0.353  0.50 34.77           C  
HETATM  892  O1 ACRS D  35      11.973  14.116   2.233  0.50 34.24           O  
HETATM  893  O1 BCRS D  35      11.973  14.107   2.248  0.50 35.28           O  
HETATM  894  O   HOH A  23     -19.752  11.918   3.524  1.00 13.44           O  
HETATM  895  O   HOH A  24     -15.624  17.807   1.805  1.00 18.31           O  
HETATM  896  O   HOH A  25     -15.280  18.305  -0.829  1.00 25.29           O  
HETATM  897  O   HOH A  26     -13.919  19.423   2.850  1.00 16.01           O  
HETATM  898  O   HOH A  27      -8.667  19.322   2.124  1.00 24.57           O  
HETATM  899  O   HOH A  28     -16.992  19.184  -4.528  1.00 32.78           O  
HETATM  900  O   HOH A  29     -23.807   4.791   0.073  1.00 42.74           O  
HETATM  901  O   HOH A  30     -13.883   8.789  14.525  1.00 35.04           O  
HETATM  902  O   HOH A  31     -18.627   2.200   6.102  1.00 26.54           O  
HETATM  903  O   HOH A  32      -6.770  18.193  10.360  1.00 28.40           O  
HETATM  904  O   HOH A  33      -5.589  16.199  15.598  1.00 35.83           O  
HETATM  905  O   HOH A  34      -4.476  16.168  12.872  1.00 26.02           O  
HETATM  906  O   HOH A  35      -7.194  19.487  -3.803  1.00 25.63           O  
HETATM  907  O   HOH A  36     -15.942  19.467   4.936  1.00 22.19           O  
HETATM  908  O   HOH A  37     -20.094  13.078  -3.233  1.00 34.12           O  
HETATM  909  O   HOH A  38     -12.378  23.653  -1.307  1.00 41.02           O  
HETATM  910  O   HOH A  39     -10.404  23.717  -3.797  1.00 47.38           O  
HETATM  911  O   HOH A  40     -13.518  13.209  11.155  1.00 39.87           O  
HETATM  912  O   HOH A  41     -15.089  11.900  12.414  1.00 36.47           O  
HETATM  913  O   HOH A  42     -16.746  12.743  18.308  1.00 43.72           O  
HETATM  914  O   HOH A  43     -10.343  20.225   7.726  1.00 42.78           O  
HETATM  915  O   HOH A  44     -15.384  13.812   9.531  1.00 34.34           O  
HETATM  916  O   HOH A  45      -8.354  13.011  20.292  1.00 42.10           O  
HETATM  917  O   HOH A  46     -17.112   5.290  12.279  1.00 41.74           O  
HETATM  918  O   HOH A  47      -8.771  19.003   9.366  1.00 30.40           O  
HETATM  919  O   HOH A  48     -14.835  21.126   0.985  0.50 31.36           O  
HETATM  920  O   HOH A  49     -11.526  17.329  12.344  1.00 43.65           O  
HETATM  921  O   HOH A  50      -2.477   6.578  16.545  1.00 50.97           O  
HETATM  922  O   HOH A  51     -11.949  23.511   5.307  1.00 63.65           O  
HETATM  923  O   HOH A  52     -18.649  23.745   0.231  1.00 49.16           O  
HETATM  924  O   HOH A  53     -16.909   7.663  14.647  1.00 32.20           O  
HETATM  925  O   HOH A  54     -11.841  20.405   3.663  1.00 32.13           O  
HETATM  926  O   HOH A  55     -18.236  21.783  -1.823  1.00 53.36           O  
HETATM  927  O   HOH A  56     -14.664  20.023  -4.817  1.00 35.54           O  
HETATM  928  O   HOH A  57     -14.033   1.890   6.639  1.00 29.97           O  
HETATM  929  O   HOH A  58     -12.030   3.512   6.995  1.00 32.32           O  
HETATM  930  O   HOH B  33      -8.159  12.286  -4.257  1.00 12.93           O  
HETATM  931  O   HOH B  34      -9.239   8.487  -6.344  1.00 25.39           O  
HETATM  932  O   HOH B  35     -10.868  18.781 -10.498  1.00 32.73           O  
HETATM  933  O   HOH B  36      -6.947  17.140   6.801  1.00 35.29           O  
HETATM  934  O   HOH B  37       2.258   7.896  17.971  1.00 29.51           O  
HETATM  935  O   HOH B  38     -13.670  11.892  -8.759  1.00 32.45           O  
HETATM  936  O   HOH B  39      -4.103  19.886  12.810  1.00 36.74           O  
HETATM  937  O   HOH B  40      -2.583   4.140  15.332  1.00 48.24           O  
HETATM  938  O   HOH B  41       3.724  11.308  10.494  1.00 36.41           O  
HETATM  939  O   HOH B  42      -4.392  18.312  11.048  1.00 32.81           O  
HETATM  940  O   HOH B  43       0.024  11.786   9.909  1.00 33.46           O  
HETATM  941  O   HOH B  44      -5.191  18.830   6.344  1.00 28.20           O  
HETATM  942  O   HOH B  45      -5.592  19.853   8.596  1.00 31.80           O  
HETATM  943  O   HOH B  46       0.331   8.750  19.727  1.00 44.93           O  
HETATM  944  O   HOH B  47     -11.445   7.172  -6.465  1.00 47.20           O  
HETATM  945  O   HOH B  48      -0.737   2.758   3.260  1.00 34.88           O  
HETATM  946  O   HOH B  49      -2.757   2.316  16.842  0.50 33.11           O  
HETATM  947  O   HOH C  23       4.679  24.370  -4.363  1.00 17.05           O  
HETATM  948  O   HOH C  24      -2.495  17.011 -11.537  1.00 13.69           O  
HETATM  949  O   HOH C  25      14.758  11.224  -6.830  1.00 32.10           O  
HETATM  950  O   HOH C  26       2.052  20.168 -14.784  1.00 24.96           O  
HETATM  951  O   HOH C  27      10.912   8.361  -7.784  1.00 41.70           O  
HETATM  952  O   HOH C  28       4.504  24.569  -1.633  1.00 25.52           O  
HETATM  953  O   HOH C  29       7.400  19.324  -9.923  1.00 22.79           O  
HETATM  954  O   HOH C  30       7.109  25.118  -5.435  1.00 24.31           O  
HETATM  955  O   HOH C  31       8.488  14.070 -14.920  1.00 39.31           O  
HETATM  956  O   HOH C  32      -5.103  15.124 -16.756  1.00 36.66           O  
HETATM  957  O   HOH C  33      11.023  22.728  -9.448  1.00 43.04           O  
HETATM  958  O   HOH C  34      14.863  16.458 -10.363  1.00 39.80           O  
HETATM  959  O   HOH C  35      11.338  21.204  -5.848  1.00 50.13           O  
HETATM  960  O   HOH C  36      13.576   9.973 -11.049  1.00 46.47           O  
HETATM  961  O   HOH C  37      12.636  13.202 -13.362  1.00 41.28           O  
HETATM  962  O   HOH C  38       7.430  23.088   0.891  1.00 36.84           O  
HETATM  963  O   HOH C  39       9.811  20.442 -12.060  1.00 45.66           O  
HETATM  964  O   HOH C  40       0.243  22.222 -15.678  1.00 40.21           O  
HETATM  965  O   HOH C  41       7.578  22.887  -1.518  1.00 44.84           O  
HETATM  966  O   HOH C  42       2.813  18.782 -16.971  1.00 42.20           O  
HETATM  967  O   HOH C  43       0.315   5.998 -15.408  1.00 41.88           O  
HETATM  968  O   HOH C  44       9.231  24.620 -10.186  1.00 41.72           O  
HETATM  969  O   HOH C  45      13.865   7.624  -6.034  1.00 51.02           O  
HETATM  970  O   HOH C  46      -0.952  11.651 -16.727  1.00 43.96           O  
HETATM  971  O   HOH D  36      -0.924  19.122  -8.629  1.00 11.73           O  
HETATM  972  O   HOH D  37      -1.169  17.936  -6.103  1.00 12.89           O  
HETATM  973  O   HOH D  38      11.189  12.591   4.507  1.00 23.60           O  
HETATM  974  O   HOH D  39       3.462  14.537   4.764  1.00 18.79           O  
HETATM  975  O   HOH D  40      -5.576   5.886 -17.444  1.00 19.72           O  
HETATM  976  O   HOH D  41       6.007  11.983   6.606  1.00 27.89           O  
HETATM  977  O   HOH D  42      -8.565  17.986  -9.321  1.00 18.34           O  
HETATM  978  O   HOH D  43      -4.061  19.662 -17.562  1.00 36.38           O  
HETATM  979  O   HOH D  44      -7.597  20.181  -9.503  1.00 24.12           O  
HETATM  980  O   HOH D  45      -8.736  19.158  -7.292  1.00 24.81           O  
HETATM  981  O   HOH D  46      -9.227   7.852  -9.934  1.00 34.26           O  
HETATM  982  O   HOH D  47      -5.908   9.895 -10.386  1.00 34.99           O  
HETATM  983  O   HOH D  48       9.306  16.776   8.499  1.00 36.32           O  
HETATM  984  O   HOH D  49      -8.248   9.720  -8.466  1.00 39.04           O  
HETATM  985  O   HOH D  50       0.000   0.000 -17.502  0.17 21.12           O  
HETATM  986  O   HOH D  51       2.052  14.578   7.135  1.00 29.27           O  
HETATM  987  O   HOH D  52      10.529  16.541   4.689  1.00 39.76           O  
HETATM  988  O   HOH D  53       0.000   0.000 -14.540  0.17 34.09           O  
HETATM  989  O   HOH D  54       4.719  12.964   8.651  1.00 61.28           O  
HETATM  990  O   HOH D  55      -9.718  16.696 -10.850  1.00 36.23           O  
HETATM  991  O   HOH D  56      -9.107   1.893 -17.770  1.00 39.66           O  
HETATM  992  O   HOH D  57      -2.111   9.630 -17.160  1.00 58.12           O  
HETATM  993  O   HOH D  58       9.947  19.801  13.102  1.00 52.67           O  
HETATM  994  O   HOH D  59       8.006  19.617  15.045  1.00 47.40           O  
HETATM  995  O   HOH D  60       0.000   0.000 -18.965  0.17 26.96           O  
HETATM  996  O   HOH D  61       4.364   4.903   5.435  1.00 26.92           O  
HETATM  997  O   HOH D  62       3.913   3.672   3.254  1.00 36.06           O  
HETATM  998  O   HOH D  63       0.074   2.687  -2.531  1.00 37.35           O  
HETATM  999  O   HOH D  64       6.103   3.725   3.750  1.00 36.07           O  
HETATM 1000  O   HOH D  65      -1.158   6.187   1.404  1.00 32.31           O  
CONECT   43   76                                                                
CONECT   49  233                                                                
CONECT   76   43                                                                
CONECT  157  327                                                                
CONECT  233   49                                                                
CONECT  253  850                                                                
CONECT  327  157                                                                
CONECT  465  498                                                                
CONECT  471  654                                                                
CONECT  498  465                                                                
CONECT  576  746                                                                
CONECT  654  471                                                                
CONECT  674  860                                                                
CONECT  746  576                                                                
CONECT  842  843  847  849                                                      
CONECT  843  842  844                                                           
CONECT  844  843  845  848                                                      
CONECT  845  844  846                                                           
CONECT  846  845  847                                                           
CONECT  847  842  846                                                           
CONECT  848  844                                                                
CONECT  849  842                                                                
CONECT  850  253  851                                                           
CONECT  851  850                                                                
CONECT  852  853  857  859                                                      
CONECT  853  852  854                                                           
CONECT  854  853  855  858                                                      
CONECT  855  854  856                                                           
CONECT  856  855  857                                                           
CONECT  857  852  856                                                           
CONECT  858  854                                                                
CONECT  859  852                                                                
CONECT  860  674  861                                                           
CONECT  861  860                                                                
CONECT  862  863  867  869                                                      
CONECT  863  862  864                                                           
CONECT  864  863  865  868                                                      
CONECT  865  864  866                                                           
CONECT  866  865  867                                                           
CONECT  867  862  866                                                           
CONECT  868  864                                                                
CONECT  869  862                                                                
CONECT  870  871  875  877                                                      
CONECT  871  870  872                                                           
CONECT  872  871  873  876                                                      
CONECT  873  872  874                                                           
CONECT  874  873  875                                                           
CONECT  875  870  874                                                           
CONECT  876  872                                                                
CONECT  877  870                                                                
CONECT  878  880  888  892                                                      
CONECT  879  881  889  893                                                      
CONECT  880  878  882                                                           
CONECT  881  879  883                                                           
CONECT  882  880  884  890                                                      
CONECT  883  881  885  891                                                      
CONECT  884  882  886                                                           
CONECT  885  883  887                                                           
CONECT  886  884  888                                                           
CONECT  887  885  889                                                           
CONECT  888  878  886                                                           
CONECT  889  879  887                                                           
CONECT  890  882                                                                
CONECT  891  883                                                                
CONECT  892  878                                                                
CONECT  893  879                                                                
MASTER      515    0    9    6    2    0   16    6  996    4   66   10          
END                                                                             


*/});