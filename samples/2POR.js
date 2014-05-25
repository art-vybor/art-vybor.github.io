function hereDoc(f) {
  return f.toString().
      replace(/^[^\/]+\/\*!?/, '').
      replace(/\*\/[^\/]+$/, '');
}

var pdb2POR = hereDoc(function() {/*!

HEADER    INTEGRAL MEMBRANE PROTEIN PORIN         24-APR-92   2POR              
TITLE     STRUCTURE OF PORIN REFINED AT 1.8 ANGSTROMS RESOLUTION                
COMPND    MOL_ID: 1;                                                            
COMPND   2 MOLECULE: PORIN;                                                     
COMPND   3 CHAIN: A;                                                            
COMPND   4 ENGINEERED: YES                                                      
SOURCE    MOL_ID: 1;                                                            
SOURCE   2 ORGANISM_SCIENTIFIC: RHODOBACTER CAPSULATUS;                         
SOURCE   3 ORGANISM_TAXID: 1061                                                 
KEYWDS    INTEGRAL MEMBRANE PROTEIN PORIN                                       
EXPDTA    X-RAY DIFFRACTION                                                     
AUTHOR    M.S.WEISS,G.E.SCHULZ                                                  
REVDAT   5   16-NOV-11 2POR    1       HETATM                                   
REVDAT   4   13-JUL-11 2POR    1       VERSN                                    
REVDAT   3   24-FEB-09 2POR    1       VERSN                                    
REVDAT   2   01-APR-03 2POR    1       JRNL                                     
REVDAT   1   15-JUL-93 2POR    0                                                
JRNL        AUTH   M.S.WEISS,G.E.SCHULZ                                         
JRNL        TITL   STRUCTURE OF PORIN REFINED AT 1.8 A RESOLUTION.              
JRNL        REF    J.MOL.BIOL.                   V. 227   493 1992              
JRNL        REFN                   ISSN 0022-2836                               
JRNL        PMID   1328651                                                      
JRNL        DOI    10.1016/0022-2836(92)90903-W                                 
REMARK   1                                                                      
REMARK   1 REFERENCE 1                                                          
REMARK   1  AUTH   M.S.WEISS,U.ABELE,J.WECKESSER,W.WELTE,E.SCHILTZ,G.E.SCHULZ   
REMARK   1  TITL   MOLECULAR ARCHITECTURE AND ELECTROSTATIC PROPERTIES OF A     
REMARK   1  TITL 2 BACTERIAL PORIN                                              
REMARK   1  REF    SCIENCE                       V. 254  1627 1991              
REMARK   1  REFN                   ISSN 0036-8075                               
REMARK   1 REFERENCE 2                                                          
REMARK   1  AUTH   E.SCHILTZ,A.KREUSCH,U.NESTEL,G.E.SCHULZ                      
REMARK   1  TITL   PRIMARY STRUCTURE OF PORIN FROM RHODOBACTER CAPSULATUS       
REMARK   1  REF    EUR.J.BIOCHEM.                V. 199   587 1991              
REMARK   1  REFN                   ISSN 0014-2956                               
REMARK   1 REFERENCE 3                                                          
REMARK   1  AUTH   M.S.WEISS,A.KREUSCH,E.SCHILTZ,U.NESTEL,W.WELTE,J.WECKESSER,  
REMARK   1  AUTH 2 G.E.SCHULZ                                                   
REMARK   1  TITL   THE STRUCTURE OF PORIN FROM RHODOBACTER CAPSULATUS AT 1.8    
REMARK   1  TITL 2 ANGSTROMS RESOLUTION                                         
REMARK   1  REF    FEBS LETT.                    V. 280   379 1991              
REMARK   1  REFN                   ISSN 0014-5793                               
REMARK   1 REFERENCE 4                                                          
REMARK   1  AUTH   A.KREUSCH,M.S.WEISS,W.WELTE,J.WECKESSER,G.E.SCHULZ           
REMARK   1  TITL   CRYSTALS OF AN INTEGRAL MEMBRANE PROTEIN DIFFRACTING TO 1.8  
REMARK   1  TITL 2 ANGSTROMS RESOLUTION                                         
REMARK   1  REF    J.MOL.BIOL.                   V. 217     9 1991              
REMARK   1  REFN                   ISSN 0022-2836                               
REMARK   1 REFERENCE 5                                                          
REMARK   1  AUTH   M.S.WEISS,T.WACKER,J.WECKESSER,W.WELTE,G.E.SCHULZ            
REMARK   1  TITL   THE THREE-DIMENSIONAL STRUCTURE OF PORIN FROM RHODOBACTER    
REMARK   1  TITL 2 CAPSULATUS AT 3 ANGSTROMS RESOLUTION                         
REMARK   1  REF    FEBS LETT.                    V. 267   268 1990              
REMARK   1  REFN                   ISSN 0014-5793                               
REMARK   1 REFERENCE 6                                                          
REMARK   1  AUTH   M.S.WEISS,T.WACKER,U.NESTEL,D.WOITZIK,J.WECKESSER,W.KREUTZ,  
REMARK   1  AUTH 2 W.WELTE,G.E.SCHULZ                                           
REMARK   1  TITL   THE STRUCTURE OF PORIN FROM RHODOBACTER CAPSULATUS AT 0.6 NM 
REMARK   1  TITL 2 RESOLUTION                                                   
REMARK   1  REF    FEBS LETT.                    V. 256   143 1989              
REMARK   1  REFN                   ISSN 0014-5793                               
REMARK   1 REFERENCE 7                                                          
REMARK   1  AUTH   U.NESTEL,T.WACKER,D.WOITZIK,J.WECKESSER,W.KREUTZ,W.WELTE     
REMARK   1  TITL   CRYSTALLIZATION AND PRELIMINARY X-RAY ANALYSIS OF PORIN FROM 
REMARK   1  TITL 2 RHODOBACTER CAPSULATUS                                       
REMARK   1  REF    FEBS LETT.                    V. 242   405 1989              
REMARK   1  REFN                   ISSN 0014-5793                               
REMARK   2                                                                      
REMARK   2 RESOLUTION.    1.80 ANGSTROMS.                                       
REMARK   3                                                                      
REMARK   3 REFINEMENT.                                                          
REMARK   3   PROGRAM     : X-PLOR                                               
REMARK   3   AUTHORS     : BRUNGER                                              
REMARK   3                                                                      
REMARK   3  DATA USED IN REFINEMENT.                                            
REMARK   3   RESOLUTION RANGE HIGH (ANGSTROMS) : 1.80                           
REMARK   3   RESOLUTION RANGE LOW  (ANGSTROMS) : 10.00                          
REMARK   3   DATA CUTOFF            (SIGMA(F)) : NULL                           
REMARK   3   DATA CUTOFF HIGH         (ABS(F)) : NULL                           
REMARK   3   DATA CUTOFF LOW          (ABS(F)) : NULL                           
REMARK   3   COMPLETENESS (WORKING+TEST)   (%) : NULL                           
REMARK   3   NUMBER OF REFLECTIONS             : 42851                          
REMARK   3                                                                      
REMARK   3  FIT TO DATA USED IN REFINEMENT.                                     
REMARK   3   CROSS-VALIDATION METHOD          : NULL                            
REMARK   3   FREE R VALUE TEST SET SELECTION  : NULL                            
REMARK   3   R VALUE            (WORKING SET) : 0.186                           
REMARK   3   FREE R VALUE                     : NULL                            
REMARK   3   FREE R VALUE TEST SET SIZE   (%) : NULL                            
REMARK   3   FREE R VALUE TEST SET COUNT      : NULL                            
REMARK   3   ESTIMATED ERROR OF FREE R VALUE  : NULL                            
REMARK   3                                                                      
REMARK   3  FIT IN THE HIGHEST RESOLUTION BIN.                                  
REMARK   3   TOTAL NUMBER OF BINS USED           : NULL                         
REMARK   3   BIN RESOLUTION RANGE HIGH       (A) : NULL                         
REMARK   3   BIN RESOLUTION RANGE LOW        (A) : NULL                         
REMARK   3   BIN COMPLETENESS (WORKING+TEST) (%) : NULL                         
REMARK   3   REFLECTIONS IN BIN    (WORKING SET) : NULL                         
REMARK   3   BIN R VALUE           (WORKING SET) : NULL                         
REMARK   3   BIN FREE R VALUE                    : NULL                         
REMARK   3   BIN FREE R VALUE TEST SET SIZE  (%) : NULL                         
REMARK   3   BIN FREE R VALUE TEST SET COUNT     : NULL                         
REMARK   3   ESTIMATED ERROR OF BIN FREE R VALUE : NULL                         
REMARK   3                                                                      
REMARK   3  NUMBER OF NON-HYDROGEN ATOMS USED IN REFINEMENT.                    
REMARK   3   PROTEIN ATOMS            : 2219                                    
REMARK   3   NUCLEIC ACID ATOMS       : 0                                       
REMARK   3   HETEROGEN ATOMS          : 87                                      
REMARK   3   SOLVENT ATOMS            : 274                                     
REMARK   3                                                                      
REMARK   3  B VALUES.                                                           
REMARK   3   FROM WILSON PLOT           (A**2) : NULL                           
REMARK   3   MEAN B VALUE      (OVERALL, A**2) : NULL                           
REMARK   3   OVERALL ANISOTROPIC B VALUE.                                       
REMARK   3    B11 (A**2) : NULL                                                 
REMARK   3    B22 (A**2) : NULL                                                 
REMARK   3    B33 (A**2) : NULL                                                 
REMARK   3    B12 (A**2) : NULL                                                 
REMARK   3    B13 (A**2) : NULL                                                 
REMARK   3    B23 (A**2) : NULL                                                 
REMARK   3                                                                      
REMARK   3  ESTIMATED COORDINATE ERROR.                                         
REMARK   3   ESD FROM LUZZATI PLOT        (A) : NULL                            
REMARK   3   ESD FROM SIGMAA              (A) : NULL                            
REMARK   3   LOW RESOLUTION CUTOFF        (A) : NULL                            
REMARK   3                                                                      
REMARK   3  CROSS-VALIDATED ESTIMATED COORDINATE ERROR.                         
REMARK   3   ESD FROM C-V LUZZATI PLOT    (A) : NULL                            
REMARK   3   ESD FROM C-V SIGMAA          (A) : NULL                            
REMARK   3                                                                      
REMARK   3  RMS DEVIATIONS FROM IDEAL VALUES.                                   
REMARK   3   BOND LENGTHS                 (A) : 0.015                           
REMARK   3   BOND ANGLES            (DEGREES) : 2.80                            
REMARK   3   DIHEDRAL ANGLES        (DEGREES) : NULL                            
REMARK   3   IMPROPER ANGLES        (DEGREES) : NULL                            
REMARK   3                                                                      
REMARK   3  ISOTROPIC THERMAL MODEL : NULL                                      
REMARK   3                                                                      
REMARK   3  ISOTROPIC THERMAL FACTOR RESTRAINTS.    RMS    SIGMA                
REMARK   3   MAIN-CHAIN BOND              (A**2) : NULL  ; NULL                 
REMARK   3   MAIN-CHAIN ANGLE             (A**2) : NULL  ; NULL                 
REMARK   3   SIDE-CHAIN BOND              (A**2) : NULL  ; NULL                 
REMARK   3   SIDE-CHAIN ANGLE             (A**2) : NULL  ; NULL                 
REMARK   3                                                                      
REMARK   3  NCS MODEL : NULL                                                    
REMARK   3                                                                      
REMARK   3  NCS RESTRAINTS.                         RMS   SIGMA/WEIGHT          
REMARK   3   GROUP  1  POSITIONAL            (A) : NULL  ; NULL                 
REMARK   3   GROUP  1  B-FACTOR           (A**2) : NULL  ; NULL                 
REMARK   3                                                                      
REMARK   3  PARAMETER FILE  1  : NULL                                           
REMARK   3  TOPOLOGY FILE  1   : NULL                                           
REMARK   3                                                                      
REMARK   3  OTHER REFINEMENT REMARKS:                                           
REMARK   3  THE CRYSTALS HAVE FORM *B* AS DESCRIBED IN THE *JRNL*               
REMARK   3  REFERENCE.                                                          
REMARK   3                                                                      
REMARK   3  RESIDUE 545 HAS NOT BEEN UNAMBIGUOUSLY IDENTIFIED. IT HAS BEEN      
REMARK   3  MODELED AS A DETERGENT N-OCTYLTETRAOXYETHYLENE                      
REMARK   4                                                                      
REMARK   4 2POR COMPLIES WITH FORMAT V. 3.15, 01-DEC-08                         
REMARK 100                                                                      
REMARK 100 THIS ENTRY HAS BEEN PROCESSED BY BNL.                                
REMARK 200                                                                      
REMARK 200 EXPERIMENTAL DETAILS                                                 
REMARK 200  EXPERIMENT TYPE                : X-RAY DIFFRACTION                  
REMARK 200  DATE OF DATA COLLECTION        : NULL                               
REMARK 200  TEMPERATURE           (KELVIN) : NULL                               
REMARK 200  PH                             : NULL                               
REMARK 200  NUMBER OF CRYSTALS USED        : NULL                               
REMARK 200                                                                      
REMARK 200  SYNCHROTRON              (Y/N) : NULL                               
REMARK 200  RADIATION SOURCE               : NULL                               
REMARK 200  BEAMLINE                       : NULL                               
REMARK 200  X-RAY GENERATOR MODEL          : NULL                               
REMARK 200  MONOCHROMATIC OR LAUE    (M/L) : NULL                               
REMARK 200  WAVELENGTH OR RANGE        (A) : NULL                               
REMARK 200  MONOCHROMATOR                  : NULL                               
REMARK 200  OPTICS                         : NULL                               
REMARK 200                                                                      
REMARK 200  DETECTOR TYPE                  : NULL                               
REMARK 200  DETECTOR MANUFACTURER          : NULL                               
REMARK 200  INTENSITY-INTEGRATION SOFTWARE : NULL                               
REMARK 200  DATA SCALING SOFTWARE          : NULL                               
REMARK 200                                                                      
REMARK 200  NUMBER OF UNIQUE REFLECTIONS   : NULL                               
REMARK 200  RESOLUTION RANGE HIGH      (A) : NULL                               
REMARK 200  RESOLUTION RANGE LOW       (A) : NULL                               
REMARK 200  REJECTION CRITERIA  (SIGMA(I)) : NULL                               
REMARK 200                                                                      
REMARK 200 OVERALL.                                                             
REMARK 200  COMPLETENESS FOR RANGE     (%) : NULL                               
REMARK 200  DATA REDUNDANCY                : NULL                               
REMARK 200  R MERGE                    (I) : NULL                               
REMARK 200  R SYM                      (I) : NULL                               
REMARK 200  <I/SIGMA(I)> FOR THE DATA SET  : NULL                               
REMARK 200                                                                      
REMARK 200 IN THE HIGHEST RESOLUTION SHELL.                                     
REMARK 200  HIGHEST RESOLUTION SHELL, RANGE HIGH (A) : NULL                     
REMARK 200  HIGHEST RESOLUTION SHELL, RANGE LOW  (A) : NULL                     
REMARK 200  COMPLETENESS FOR SHELL     (%) : NULL                               
REMARK 200  DATA REDUNDANCY IN SHELL       : NULL                               
REMARK 200  R MERGE FOR SHELL          (I) : NULL                               
REMARK 200  R SYM FOR SHELL            (I) : NULL                               
REMARK 200  <I/SIGMA(I)> FOR SHELL         : NULL                               
REMARK 200                                                                      
REMARK 200 DIFFRACTION PROTOCOL: NULL                                           
REMARK 200 METHOD USED TO DETERMINE THE STRUCTURE: NULL                         
REMARK 200 SOFTWARE USED: NULL                                                  
REMARK 200 STARTING MODEL: NULL                                                 
REMARK 200                                                                      
REMARK 200 REMARK: NULL                                                         
REMARK 280                                                                      
REMARK 280 CRYSTAL                                                              
REMARK 280 SOLVENT CONTENT, VS   (%): 67.61                                     
REMARK 280 MATTHEWS COEFFICIENT, VM (ANGSTROMS**3/DA): 3.80                     
REMARK 280                                                                      
REMARK 280 CRYSTALLIZATION CONDITIONS: NULL                                     
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
REMARK 290   SMTRY1   4  1.000000  0.000000  0.000000       46.15000            
REMARK 290   SMTRY2   4  0.000000  1.000000  0.000000       26.64471            
REMARK 290   SMTRY3   4  0.000000  0.000000  1.000000       48.73333            
REMARK 290   SMTRY1   5 -0.500000 -0.866025  0.000000       46.15000            
REMARK 290   SMTRY2   5  0.866025 -0.500000  0.000000       26.64471            
REMARK 290   SMTRY3   5  0.000000  0.000000  1.000000       48.73333            
REMARK 290   SMTRY1   6 -0.500000  0.866025  0.000000       46.15000            
REMARK 290   SMTRY2   6 -0.866025 -0.500000  0.000000       26.64471            
REMARK 290   SMTRY3   6  0.000000  0.000000  1.000000       48.73333            
REMARK 290   SMTRY1   7  1.000000  0.000000  0.000000        0.00000            
REMARK 290   SMTRY2   7  0.000000  1.000000  0.000000       53.28943            
REMARK 290   SMTRY3   7  0.000000  0.000000  1.000000       97.46667            
REMARK 290   SMTRY1   8 -0.500000 -0.866025  0.000000        0.00000            
REMARK 290   SMTRY2   8  0.866025 -0.500000  0.000000       53.28943            
REMARK 290   SMTRY3   8  0.000000  0.000000  1.000000       97.46667            
REMARK 290   SMTRY1   9 -0.500000  0.866025  0.000000        0.00000            
REMARK 290   SMTRY2   9 -0.866025 -0.500000  0.000000       53.28943            
REMARK 290   SMTRY3   9  0.000000  0.000000  1.000000       97.46667            
REMARK 290                                                                      
REMARK 290 REMARK: NULL                                                         
REMARK 300                                                                      
REMARK 300 BIOMOLECULE: 1                                                       
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
REMARK 350 AUTHOR DETERMINED BIOLOGICAL UNIT: TRIMERIC                          
REMARK 350 SOFTWARE DETERMINED QUATERNARY STRUCTURE: TRIMERIC                   
REMARK 350 SOFTWARE USED: PISA,PQS                                              
REMARK 350 TOTAL BURIED SURFACE AREA: 17300 ANGSTROM**2                         
REMARK 350 SURFACE AREA OF THE COMPLEX: 36880 ANGSTROM**2                       
REMARK 350 CHANGE IN SOLVENT FREE ENERGY: -170.0 KCAL/MOL                       
REMARK 350 APPLY THE FOLLOWING TO CHAINS: A                                     
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
REMARK 375      HOH A 361  LIES ON A SPECIAL POSITION.                          
REMARK 500                                                                      
REMARK 500 GEOMETRY AND STEREOCHEMISTRY                                         
REMARK 500 SUBTOPIC: COVALENT BOND LENGTHS                                      
REMARK 500                                                                      
REMARK 500 THE STEREOCHEMICAL PARAMETERS OF THE FOLLOWING RESIDUES              
REMARK 500 HAVE VALUES WHICH DEVIATE FROM EXPECTED VALUES BY MORE               
REMARK 500 THAN 6*RMSD (M=MODEL NUMBER; RES=RESIDUE NAME; C=CHAIN               
REMARK 500 IDENTIFIER; SSEQ=SEQUENCE NUMBER; I=INSERTION CODE).                 
REMARK 500                                                                      
REMARK 500 STANDARD TABLE:                                                      
REMARK 500 FORMAT: (10X,I3,1X,2(A3,1X,A1,I4,A1,1X,A4,3X),1X,F6.3)               
REMARK 500                                                                      
REMARK 500 EXPECTED VALUES PROTEIN: ENGH AND HUBER, 1999                        
REMARK 500 EXPECTED VALUES NUCLEIC ACID: CLOWNEY ET AL 1996                     
REMARK 500                                                                      
REMARK 500  M RES CSSEQI ATM1   RES CSSEQI ATM2   DEVIATION                     
REMARK 500    HIS A 229   NE2   HIS A 229   CD2    -0.067                       
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
REMARK 500    ARG A   9   NE  -  CZ  -  NH2 ANGL. DEV. =  -3.2 DEGREES          
REMARK 500    TRP A  19   CD1 -  CG  -  CD2 ANGL. DEV. =   6.6 DEGREES          
REMARK 500    TRP A  19   CE2 -  CD2 -  CG  ANGL. DEV. =  -5.6 DEGREES          
REMARK 500    ARG A  24   NE  -  CZ  -  NH1 ANGL. DEV. =   3.1 DEGREES          
REMARK 500    ASP A 101   CB  -  CG  -  OD1 ANGL. DEV. =   7.3 DEGREES          
REMARK 500    TYR A 123   CB  -  CG  -  CD1 ANGL. DEV. =  -3.9 DEGREES          
REMARK 500    ASP A 136   CB  -  CG  -  OD1 ANGL. DEV. =   6.2 DEGREES          
REMARK 500    TYR A 167   CB  -  CG  -  CD2 ANGL. DEV. =  -4.2 DEGREES          
REMARK 500    TYR A 263   CB  -  CG  -  CD1 ANGL. DEV. =  -4.4 DEGREES          
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
REMARK 500    ASP A  17      -37.35   -132.37                                   
REMARK 500    ASP A  93       83.99     64.70                                   
REMARK 500    THR A 256       -7.57     73.01                                   
REMARK 500    ILE A 257      -77.43   -108.97                                   
REMARK 500    SER A 289      112.52    -34.30                                   
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
REMARK 525    HOH A 403        DISTANCE =  5.27 ANGSTROMS                       
REMARK 525    HOH A 446        DISTANCE =  5.96 ANGSTROMS                       
REMARK 525    HOH A 558        DISTANCE =  7.12 ANGSTROMS                       
REMARK 525    HOH A 565        DISTANCE =  6.72 ANGSTROMS                       
REMARK 525    HOH A 568        DISTANCE =  7.37 ANGSTROMS                       
REMARK 525    HOH A 570        DISTANCE =  7.72 ANGSTROMS                       
REMARK 525    HOH A 571        DISTANCE =  5.80 ANGSTROMS                       
REMARK 525    HOH A 572        DISTANCE =  6.94 ANGSTROMS                       
REMARK 525    HOH A 573        DISTANCE =  5.38 ANGSTROMS                       
REMARK 525    HOH A 574        DISTANCE =  6.47 ANGSTROMS                       
REMARK 525    HOH A 578        DISTANCE =  6.57 ANGSTROMS                       
REMARK 525    HOH A 581        DISTANCE =  5.78 ANGSTROMS                       
REMARK 525    HOH A 582        DISTANCE =  5.49 ANGSTROMS                       
REMARK 600                                                                      
REMARK 600 HETEROGEN                                                            
REMARK 600 THIRTY FOUR DETERGENT FRAGMENTS HAVE BEEN MODELED AS WATERS          
REMARK 620                                                                      
REMARK 620 METAL COORDINATION                                                   
REMARK 620 (M=MODEL NUMBER; RES=RESIDUE NAME; C=CHAIN IDENTIFIER;               
REMARK 620 SSEQ=SEQUENCE NUMBER; I=INSERTION CODE):                             
REMARK 620                                                                      
REMARK 620 COORDINATION ANGLES FOR:  M RES CSSEQI METAL                         
REMARK 620                              CA A 302  CA                            
REMARK 620 N RES CSSEQI ATOM                                                    
REMARK 620 1 HOH A 312   O                                                      
REMARK 620 2 HOH A 307   O    79.4                                              
REMARK 620 3 HOH A 339   O    86.7  74.4                                        
REMARK 620 4 GLU A  80   OE2  80.9  75.3 148.9                                  
REMARK 620 5 GLU A  80   OE1  92.0 125.5 159.5  50.2                            
REMARK 620 6 ASP A 108   OD2 175.3  95.8  92.3  97.7  90.6                      
REMARK 620 7 HOH A 305   O    86.9 150.3  78.6 128.6  80.9  97.5                
REMARK 620 N                    1     2     3     4     5     6                 
REMARK 620                                                                      
REMARK 620 COORDINATION ANGLES FOR:  M RES CSSEQI METAL                         
REMARK 620                              CA A 303  CA                            
REMARK 620 N RES CSSEQI ATOM                                                    
REMARK 620 1 ASP A  95   OD1                                                    
REMARK 620 2 ASN A 100   OD1  73.7                                              
REMARK 620 3 ASP A 101   OD1  85.1  81.2                                        
REMARK 620 4 HOH A 331   O   150.5  76.9  93.2                                  
REMARK 620 5 ASP A  93   OD1  77.7  77.7 155.8  93.5                            
REMARK 620 6 ASP A  93   OD2 113.9 122.8 151.9  80.1  52.3                      
REMARK 620 7 ASP A  95   OD2  49.5 123.2  94.3 159.4  87.3  84.2                
REMARK 620 8 HOH A 327   O   126.7 146.6  75.5  80.8 128.6  76.5  82.6          
REMARK 620 N                    1     2     3     4     5     6     7           
REMARK 620                                                                      
REMARK 620 COORDINATION ANGLES FOR:  M RES CSSEQI METAL                         
REMARK 620                              CA A 304  CA                            
REMARK 620 N RES CSSEQI ATOM                                                    
REMARK 620 1 ASN A 116   OD1                                                    
REMARK 620 2 ASP A 136   OD2 103.7                                              
REMARK 620 3 LYS A 138   O    81.6 128.0                                        
REMARK 620 4 GLY A 140   O    95.7 145.2  82.9                                  
REMARK 620 5 HOH A 314   O    84.5  78.0 152.9  75.4                            
REMARK 620 6 ASP A 136   OD1  89.8  52.3  76.4 157.5 126.9                      
REMARK 620 7 ASN A  20   OD1 174.7  81.5  94.8  79.9  97.2  93.2                
REMARK 620 N                    1     2     3     4     5     6                 
REMARK 700                                                                      
REMARK 700 SHEET                                                                
REMARK 700 THE SHEET PRESENTED AS *S1* ON SHEET RECORDS BELOW IS                
REMARK 700 ACTUALLY A SIXTEEN-STRANDED BETA-BARREL.  THIS IS                    
REMARK 700 REPRESENTED AS A SEVENTEEN-STRANDED SHEET IN WHICH THE               
REMARK 700 FIRST AND LAST STRANDS ARE IDENTICAL.                                
REMARK 800                                                                      
REMARK 800 SITE                                                                 
REMARK 800 SITE_IDENTIFIER: AC1                                                 
REMARK 800 EVIDENCE_CODE: SOFTWARE                                              
REMARK 800 SITE_DESCRIPTION: BINDING SITE FOR RESIDUE CA A 302                  
REMARK 800                                                                      
REMARK 800 SITE_IDENTIFIER: AC2                                                 
REMARK 800 EVIDENCE_CODE: SOFTWARE                                              
REMARK 800 SITE_DESCRIPTION: BINDING SITE FOR RESIDUE CA A 303                  
REMARK 800                                                                      
REMARK 800 SITE_IDENTIFIER: AC3                                                 
REMARK 800 EVIDENCE_CODE: SOFTWARE                                              
REMARK 800 SITE_DESCRIPTION: BINDING SITE FOR RESIDUE CA A 304                  
REMARK 800                                                                      
REMARK 800 SITE_IDENTIFIER: AC4                                                 
REMARK 800 EVIDENCE_CODE: SOFTWARE                                              
REMARK 800 SITE_DESCRIPTION: BINDING SITE FOR RESIDUE C8E A 545                 
REMARK 800                                                                      
REMARK 800 SITE_IDENTIFIER: AC5                                                 
REMARK 800 EVIDENCE_CODE: SOFTWARE                                              
REMARK 800 SITE_DESCRIPTION: BINDING SITE FOR RESIDUE C8E A 546                 
REMARK 800                                                                      
REMARK 800 SITE_IDENTIFIER: AC6                                                 
REMARK 800 EVIDENCE_CODE: SOFTWARE                                              
REMARK 800 SITE_DESCRIPTION: BINDING SITE FOR RESIDUE C8E A 548                 
DBREF  2POR A    1   301  UNP    P31243   PORI_RHOCA       1    301             
SEQRES   1 A  301  GLU VAL LYS LEU SER GLY ASP ALA ARG MET GLY VAL MET          
SEQRES   2 A  301  TYR ASN GLY ASP ASP TRP ASN PHE SER SER ARG SER ARG          
SEQRES   3 A  301  VAL LEU PHE THR MET SER GLY THR THR ASP SER GLY LEU          
SEQRES   4 A  301  GLU PHE GLY ALA SER PHE LYS ALA HIS GLU SER VAL GLY          
SEQRES   5 A  301  ALA GLU THR GLY GLU ASP GLY THR VAL PHE LEU SER GLY          
SEQRES   6 A  301  ALA PHE GLY LYS ILE GLU MET GLY ASP ALA LEU GLY ALA          
SEQRES   7 A  301  SER GLU ALA LEU PHE GLY ASP LEU TYR GLU VAL GLY TYR          
SEQRES   8 A  301  THR ASP LEU ASP ASP ARG GLY GLY ASN ASP ILE PRO TYR          
SEQRES   9 A  301  LEU THR GLY ASP GLU ARG LEU THR ALA GLU ASP ASN PRO          
SEQRES  10 A  301  VAL LEU LEU TYR THR TYR SER ALA GLY ALA PHE SER VAL          
SEQRES  11 A  301  ALA ALA SER MET SER ASP GLY LYS VAL GLY GLU THR SER          
SEQRES  12 A  301  GLU ASP ASP ALA GLN GLU MET ALA VAL ALA ALA ALA TYR          
SEQRES  13 A  301  THR PHE GLY ASN TYR THR VAL GLY LEU GLY TYR GLU LYS          
SEQRES  14 A  301  ILE ASP SER PRO ASP THR ALA LEU MET ALA ASP MET GLU          
SEQRES  15 A  301  GLN LEU GLU LEU ALA ALA ILE ALA LYS PHE GLY ALA THR          
SEQRES  16 A  301  ASN VAL LYS ALA TYR TYR ALA ASP GLY GLU LEU ASP ARG          
SEQRES  17 A  301  ASP PHE ALA ARG ALA VAL PHE ASP LEU THR PRO VAL ALA          
SEQRES  18 A  301  ALA ALA ALA THR ALA VAL ASP HIS LYS ALA TYR GLY LEU          
SEQRES  19 A  301  SER VAL ASP SER THR PHE GLY ALA THR THR VAL GLY GLY          
SEQRES  20 A  301  TYR VAL GLN VAL LEU ASP ILE ASP THR ILE ASP ASP VAL          
SEQRES  21 A  301  THR TYR TYR GLY LEU GLY ALA SER TYR ASP LEU GLY GLY          
SEQRES  22 A  301  GLY ALA SER ILE VAL GLY GLY ILE ALA ASP ASN ASP LEU          
SEQRES  23 A  301  PRO ASN SER ASP MET VAL ALA ASP LEU GLY VAL LYS PHE          
SEQRES  24 A  301  LYS PHE                                                      
HET     CA  A 302       1                                                       
HET     CA  A 303       1                                                       
HET     CA  A 304       1                                                       
HET    C8E  A 545      21                                                       
HET    C8E  A 546      21                                                       
HET    C8E  A 547      21                                                       
HET    C8E  A 548      21                                                       
HETNAM      CA CALCIUM ION                                                      
HETNAM     C8E (HYDROXYETHYLOXY)TRI(ETHYLOXY)OCTANE                             
FORMUL   2   CA    3(CA 2+)                                                     
FORMUL   5  C8E    4(C16 H34 O5)                                                
FORMUL   9  HOH   *274(H2 O)                                                    
HELIX    1  H1 SER A   50  GLU A   54  1                                   5    
HELIX    2  H2 GLY A   77  PHE A   83  1                                   7    
HELIX    3  H3 ARG A  208  VAL A  214  1                                   7    
SHEET    1  S117 GLU A   1  ASN A  15  0                                        
SHEET    2  S117 ASP A  18  THR A  35 -1  O  ASP A  18   N  ASN A  15           
SHEET    3  S117 LEU A  39  LYS A  46 -1  O  LEU A  39   N  THR A  35           
SHEET    4  S117 GLY A  59  GLY A  65 -1  N  THR A  60   O  SER A  44           
SHEET    5  S117 GLY A  68  ASP A  74 -1  N  GLY A  68   O  GLY A  65           
SHEET    6  S117 VAL A 118  ALA A 125 -1  N  VAL A 118   O  GLY A  73           
SHEET    7  S117 PHE A 128  SER A 135 -1  N  PHE A 128   O  ALA A 125           
SHEET    8  S117 GLN A 148  PHE A 158 -1  O  GLU A 149   N  SER A 135           
SHEET    9  S117 TYR A 161  ASP A 171 -1  N  TYR A 161   O  PHE A 158           
SHEET   10  S117 MET A 181  PHE A 192 -1  N  MET A 181   O  ILE A 170           
SHEET   11  S117 THR A 195  LEU A 206 -1  N  THR A 195   O  PHE A 192           
SHEET   12  S117 VAL A 227  PHE A 240 -1  N  VAL A 227   O  LEU A 206           
SHEET   13  S117 THR A 243  ILE A 254 -1  N  THR A 243   O  PHE A 240           
SHEET   14  S117 ASP A 258  LEU A 271 -1  N  ASP A 258   O  ILE A 254           
SHEET   15  S117 ALA A 275  ASP A 285 -1  O  ALA A 275   N  LEU A 271           
SHEET   16  S117 VAL A 292  PHE A 301 -1  N  VAL A 292   O  ALA A 282           
SHEET   17  S117 GLU A   1  ASN A  15  1  N  GLY A   6   O  PHE A 301           
LINK        CA    CA A 302                 O   HOH A 312     1555   1555  2.28  
LINK        CA    CA A 302                 O   HOH A 307     1555   1555  2.32  
LINK        CA    CA A 302                 O   HOH A 339     1555   1555  2.38  
LINK        CA    CA A 302                 OE2 GLU A  80     1555   1555  2.48  
LINK        CA    CA A 302                 OE1 GLU A  80     1555   1555  2.53  
LINK        CA    CA A 302                 OD2 ASP A 108     1555   1555  2.24  
LINK        CA    CA A 302                 O   HOH A 305     1555   1555  2.43  
LINK        CA    CA A 303                 OD1 ASP A  95     1555   1555  2.63  
LINK        CA    CA A 303                 OD1 ASN A 100     1555   1555  2.31  
LINK        CA    CA A 303                 OD1 ASP A 101     1555   1555  2.25  
LINK        CA    CA A 303                 O   HOH A 331     1555   1555  2.39  
LINK        CA    CA A 303                 OD1 ASP A  93     1555   1555  2.33  
LINK        CA    CA A 303                 OD2 ASP A  93     1555   1555  2.45  
LINK        CA    CA A 303                 OD2 ASP A  95     1555   1555  2.40  
LINK        CA    CA A 303                 O   HOH A 327     1555   1555  2.24  
LINK        CA    CA A 304                 OD1 ASN A 116     1555   1555  2.16  
LINK        CA    CA A 304                 OD2 ASP A 136     1555   1555  2.39  
LINK        CA    CA A 304                 O   LYS A 138     1555   1555  2.55  
LINK        CA    CA A 304                 O   GLY A 140     1555   1555  2.18  
LINK        CA    CA A 304                 O   HOH A 314     1555   1555  2.35  
LINK        CA    CA A 304                 OD1 ASP A 136     1555   1555  2.35  
LINK        CA    CA A 304                 OD1 ASN A  20     1555   2555  2.18  
SITE     1 AC1  6 GLU A  80  ASP A 108  HOH A 305  HOH A 307                    
SITE     2 AC1  6 HOH A 312  HOH A 339                                          
SITE     1 AC2  6 ASP A  93  ASP A  95  ASN A 100  ASP A 101                    
SITE     2 AC2  6 HOH A 327  HOH A 331                                          
SITE     1 AC3  6 ASN A  20  ASN A 116  ASP A 136  LYS A 138                    
SITE     2 AC3  6 GLY A 140  HOH A 314                                          
SITE     1 AC4  4 GLN A 183  VAL A 214  LEU A 286  ASN A 288                    
SITE     1 AC5  4 TRP A  19  MET A 134  GLN A 148  GLY A 280                    
SITE     1 AC6  4 TYR A 200  TYR A 232  VAL A 249  THR A 261                    
CRYST1   92.300   92.300  146.200  90.00  90.00 120.00 H 3           9          
ORIGX1      1.000000  0.000000  0.000000        0.00000                         
ORIGX2      0.000000  1.000000  0.000000        0.00000                         
ORIGX3      0.000000  0.000000  1.000000        0.00000                         
SCALE1      0.010834  0.006255  0.000000        0.00000                         
SCALE2      0.000000  0.012510  0.000000        0.00000                         
SCALE3      0.000000  0.000000  0.006840        0.00000                         
ATOM      1  N   GLU A   1      10.975  -2.428   6.735  1.00 27.59           N  
ATOM      2  CA  GLU A   1       9.566  -2.578   6.405  1.00 36.06           C  
ATOM      3  C   GLU A   1       8.689  -3.034   7.601  1.00 22.34           C  
ATOM      4  O   GLU A   1       9.156  -3.908   8.335  1.00 23.38           O  
ATOM      5  CB  GLU A   1       9.513  -3.583   5.273  1.00 27.56           C  
ATOM      6  CG  GLU A   1       8.120  -3.932   4.767  1.00 46.76           C  
ATOM      7  CD  GLU A   1       8.059  -5.151   3.839  1.00 78.17           C  
ATOM      8  OE1 GLU A   1       8.986  -5.978   3.838  1.00 83.62           O  
ATOM      9  OE2 GLU A   1       7.059  -5.270   3.122  1.00 88.58           O  
ATOM     10  N   VAL A   2       7.445  -2.564   7.760  1.00 24.91           N  
ATOM     11  CA  VAL A   2       6.554  -2.916   8.868  1.00 26.19           C  
ATOM     12  C   VAL A   2       5.235  -3.431   8.314  1.00 21.63           C  
ATOM     13  O   VAL A   2       4.554  -2.685   7.614  1.00 25.05           O  
ATOM     14  CB  VAL A   2       6.258  -1.672   9.795  1.00 21.80           C  
ATOM     15  CG1 VAL A   2       5.414  -2.151  10.975  1.00 21.14           C  
ATOM     16  CG2 VAL A   2       7.526  -1.022  10.328  1.00 21.61           C  
ATOM     17  N   LYS A   3       4.811  -4.658   8.584  1.00 17.35           N  
ATOM     18  CA  LYS A   3       3.536  -5.187   8.138  1.00 16.93           C  
ATOM     19  C   LYS A   3       2.611  -5.431   9.336  1.00 22.75           C  
ATOM     20  O   LYS A   3       3.086  -5.703  10.440  1.00 24.29           O  
ATOM     21  CB  LYS A   3       3.712  -6.524   7.421  1.00 20.86           C  
ATOM     22  CG  LYS A   3       4.477  -6.434   6.116  1.00 49.31           C  
ATOM     23  CD  LYS A   3       4.137  -7.645   5.248  1.00 66.30           C  
ATOM     24  CE  LYS A   3       4.389  -7.309   3.763  1.00 91.35           C  
ATOM     25  NZ  LYS A   3       3.660  -6.128   3.288  1.00 86.70           N  
ATOM     26  N   LEU A   4       1.317  -5.393   9.102  1.00 18.28           N  
ATOM     27  CA  LEU A   4       0.307  -5.586  10.089  1.00 17.20           C  
ATOM     28  C   LEU A   4      -0.511  -6.790   9.822  1.00 25.71           C  
ATOM     29  O   LEU A   4      -0.857  -7.096   8.688  1.00 22.60           O  
ATOM     30  CB  LEU A   4      -0.658  -4.425  10.135  1.00 17.62           C  
ATOM     31  CG  LEU A   4      -0.154  -3.047  10.591  1.00 25.02           C  
ATOM     32  CD1 LEU A   4      -1.260  -2.032  10.663  1.00 27.49           C  
ATOM     33  CD2 LEU A   4       0.342  -3.158  12.001  1.00 28.78           C  
ATOM     34  N   SER A   5      -0.858  -7.520  10.854  1.00 18.09           N  
ATOM     35  CA  SER A   5      -1.843  -8.581  10.759  1.00 16.56           C  
ATOM     36  C   SER A   5      -2.590  -8.569  12.107  1.00 21.22           C  
ATOM     37  O   SER A   5      -2.231  -7.755  12.976  1.00 17.63           O  
ATOM     38  CB  SER A   5      -1.182  -9.918  10.543  1.00 15.90           C  
ATOM     39  OG  SER A   5      -0.206 -10.289  11.503  1.00 22.45           O  
ATOM     40  N   GLY A   6      -3.582  -9.404  12.337  1.00 22.36           N  
ATOM     41  CA  GLY A   6      -4.313  -9.399  13.598  1.00 18.52           C  
ATOM     42  C   GLY A   6      -5.194 -10.590  13.711  1.00 20.43           C  
ATOM     43  O   GLY A   6      -5.272 -11.470  12.839  1.00 19.89           O  
ATOM     44  N   ASP A   7      -5.858 -10.676  14.845  1.00 17.75           N  
ATOM     45  CA  ASP A   7      -6.828 -11.730  15.071  1.00 14.63           C  
ATOM     46  C   ASP A   7      -7.839 -11.230  16.099  1.00 17.50           C  
ATOM     47  O   ASP A   7      -7.656 -10.162  16.698  1.00 17.10           O  
ATOM     48  CB  ASP A   7      -6.157 -13.038  15.557  1.00 15.83           C  
ATOM     49  CG  ASP A   7      -5.230 -12.906  16.760  1.00 23.05           C  
ATOM     50  OD1 ASP A   7      -5.656 -12.431  17.801  1.00 20.15           O  
ATOM     51  OD2 ASP A   7      -4.071 -13.234  16.640  1.00 25.78           O  
ATOM     52  N   ALA A   8      -8.944 -11.946  16.224  1.00 19.52           N  
ATOM     53  CA  ALA A   8     -10.035 -11.603  17.141  1.00 15.71           C  
ATOM     54  C   ALA A   8     -10.861 -12.858  17.357  1.00 19.05           C  
ATOM     55  O   ALA A   8     -10.682 -13.866  16.641  1.00 18.32           O  
ATOM     56  CB  ALA A   8     -10.945 -10.502  16.587  1.00 14.05           C  
ATOM     57  N   ARG A   9     -11.662 -12.914  18.432  1.00 16.33           N  
ATOM     58  CA  ARG A   9     -12.501 -14.065  18.709  1.00 13.95           C  
ATOM     59  C   ARG A   9     -13.651 -13.601  19.567  1.00 17.40           C  
ATOM     60  O   ARG A   9     -13.553 -12.536  20.208  1.00 18.39           O  
ATOM     61  CB  ARG A   9     -11.687 -15.156  19.410  1.00 15.94           C  
ATOM     62  CG  ARG A   9     -11.320 -14.825  20.843  1.00 16.00           C  
ATOM     63  CD  ARG A   9     -10.256 -15.772  21.276  1.00 19.18           C  
ATOM     64  NE  ARG A   9     -10.038 -15.564  22.699  1.00 20.39           N  
ATOM     65  CZ  ARG A   9      -8.998 -16.081  23.374  1.00 23.61           C  
ATOM     66  NH1 ARG A   9      -8.039 -16.818  22.792  1.00 19.92           N  
ATOM     67  NH2 ARG A   9      -8.922 -15.805  24.689  1.00 23.34           N  
ATOM     68  N   MET A  10     -14.789 -14.262  19.531  1.00 15.77           N  
ATOM     69  CA  MET A  10     -15.931 -13.891  20.365  1.00 19.06           C  
ATOM     70  C   MET A  10     -16.832 -15.099  20.499  1.00 24.44           C  
ATOM     71  O   MET A  10     -16.838 -15.965  19.620  1.00 18.02           O  
ATOM     72  CB  MET A  10     -16.723 -12.707  19.809  1.00 18.72           C  
ATOM     73  CG  MET A  10     -17.489 -12.938  18.541  1.00 25.28           C  
ATOM     74  SD  MET A  10     -18.482 -11.490  18.191  1.00 30.85           S  
ATOM     75  CE  MET A  10     -18.740 -12.010  16.541  1.00 33.80           C  
ATOM     76  N   GLY A  11     -17.502 -15.304  21.642  1.00 17.85           N  
ATOM     77  CA  GLY A  11     -18.325 -16.491  21.829  1.00 18.79           C  
ATOM     78  C   GLY A  11     -18.676 -16.572  23.288  1.00 25.94           C  
ATOM     79  O   GLY A  11     -18.702 -15.531  23.959  1.00 21.22           O  
ATOM     80  N   VAL A  12     -18.929 -17.776  23.769  1.00 22.43           N  
ATOM     81  CA  VAL A  12     -19.310 -18.051  25.177  1.00 22.84           C  
ATOM     82  C   VAL A  12     -18.421 -19.118  25.753  1.00 21.81           C  
ATOM     83  O   VAL A  12     -18.005 -20.034  25.037  1.00 20.69           O  
ATOM     84  CB  VAL A  12     -20.786 -18.518  25.319  1.00 23.09           C  
ATOM     85  CG1 VAL A  12     -21.639 -17.287  25.071  1.00 21.02           C  
ATOM     86  CG2 VAL A  12     -21.167 -19.632  24.355  1.00 22.56           C  
ATOM     87  N   MET A  13     -18.010 -18.982  27.018  1.00 16.86           N  
ATOM     88  CA  MET A  13     -17.066 -19.909  27.604  1.00 18.95           C  
ATOM     89  C   MET A  13     -17.695 -20.359  28.938  1.00 26.49           C  
ATOM     90  O   MET A  13     -18.277 -19.533  29.649  1.00 22.68           O  
ATOM     91  CB  MET A  13     -15.725 -19.176  27.821  1.00 19.57           C  
ATOM     92  CG AMET A  13     -14.661 -20.018  28.553  0.51 33.28           C  
ATOM     93  CG BMET A  13     -14.564 -19.969  28.448  0.49 31.07           C  
ATOM     94  SD AMET A  13     -14.864 -20.093  30.362  0.51 18.59           S  
ATOM     95  SD BMET A  13     -14.047 -19.495  30.135  0.49 33.60           S  
ATOM     96  CE AMET A  13     -14.637 -18.365  30.663  0.51 14.41           C  
ATOM     97  CE BMET A  13     -13.423 -21.075  30.594  0.49 12.77           C  
ATOM     98  N   TYR A  14     -17.572 -21.615  29.305  1.00 23.01           N  
ATOM     99  CA  TYR A  14     -18.178 -22.199  30.497  1.00 25.16           C  
ATOM    100  C   TYR A  14     -17.029 -22.485  31.428  1.00 23.22           C  
ATOM    101  O   TYR A  14     -16.171 -23.295  31.063  1.00 23.70           O  
ATOM    102  CB  TYR A  14     -18.841 -23.482  30.133  1.00 24.00           C  
ATOM    103  CG  TYR A  14     -19.541 -24.129  31.300  1.00 28.72           C  
ATOM    104  CD1 TYR A  14     -20.727 -23.561  31.734  1.00 29.42           C  
ATOM    105  CD2 TYR A  14     -19.017 -25.283  31.856  1.00 27.77           C  
ATOM    106  CE1 TYR A  14     -21.430 -24.167  32.750  1.00 32.13           C  
ATOM    107  CE2 TYR A  14     -19.717 -25.895  32.876  1.00 30.23           C  
ATOM    108  CZ  TYR A  14     -20.915 -25.329  33.305  1.00 32.81           C  
ATOM    109  OH  TYR A  14     -21.626 -25.944  34.326  1.00 50.72           O  
ATOM    110  N   ASN A  15     -17.000 -21.905  32.638  1.00 22.01           N  
ATOM    111  CA  ASN A  15     -15.841 -22.047  33.535  1.00 22.52           C  
ATOM    112  C   ASN A  15     -15.889 -23.250  34.484  1.00 31.39           C  
ATOM    113  O   ASN A  15     -15.038 -23.447  35.359  1.00 32.32           O  
ATOM    114  CB  ASN A  15     -15.660 -20.755  34.380  1.00 24.87           C  
ATOM    115  CG  ASN A  15     -16.856 -20.434  35.271  1.00 23.96           C  
ATOM    116  OD1 ASN A  15     -17.708 -21.291  35.515  1.00 23.91           O  
ATOM    117  ND2 ASN A  15     -17.090 -19.204  35.695  1.00 26.01           N  
ATOM    118  N   GLY A  16     -16.865 -24.119  34.303  1.00 26.28           N  
ATOM    119  CA  GLY A  16     -17.013 -25.246  35.198  1.00 33.32           C  
ATOM    120  C   GLY A  16     -18.353 -25.113  35.878  1.00 30.42           C  
ATOM    121  O   GLY A  16     -18.975 -26.124  36.199  1.00 36.69           O  
ATOM    122  N   ASP A  17     -18.860 -23.882  36.047  1.00 29.56           N  
ATOM    123  CA  ASP A  17     -20.141 -23.614  36.727  1.00 29.65           C  
ATOM    124  C   ASP A  17     -21.077 -22.659  35.981  1.00 32.17           C  
ATOM    125  O   ASP A  17     -22.304 -22.831  35.929  1.00 30.83           O  
ATOM    126  CB  ASP A  17     -19.849 -23.042  38.165  1.00 35.32           C  
ATOM    127  CG  ASP A  17     -18.950 -23.913  39.090  1.00 51.32           C  
ATOM    128  OD1 ASP A  17     -19.361 -25.019  39.486  1.00 59.35           O  
ATOM    129  OD2 ASP A  17     -17.822 -23.488  39.391  1.00 65.43           O  
ATOM    130  N   ASP A  18     -20.505 -21.638  35.336  1.00 24.80           N  
ATOM    131  CA  ASP A  18     -21.301 -20.661  34.621  1.00 23.22           C  
ATOM    132  C   ASP A  18     -20.689 -20.330  33.261  1.00 26.47           C  
ATOM    133  O   ASP A  18     -19.485 -20.520  33.049  1.00 25.52           O  
ATOM    134  CB  ASP A  18     -21.381 -19.351  35.370  1.00 25.98           C  
ATOM    135  CG  ASP A  18     -22.210 -19.562  36.608  1.00 43.16           C  
ATOM    136  OD1 ASP A  18     -23.428 -19.634  36.500  1.00 41.16           O  
ATOM    137  OD2 ASP A  18     -21.610 -19.689  37.666  1.00 33.11           O  
ATOM    138  N   TRP A  19     -21.570 -19.845  32.394  1.00 24.02           N  
ATOM    139  CA  TRP A  19     -21.228 -19.334  31.074  1.00 29.52           C  
ATOM    140  C   TRP A  19     -20.887 -17.850  31.201  1.00 34.72           C  
ATOM    141  O   TRP A  19     -21.489 -17.150  32.023  1.00 26.95           O  
ATOM    142  CB  TRP A  19     -22.413 -19.489  30.099  1.00 20.45           C  
ATOM    143  CG  TRP A  19     -22.600 -20.931  29.671  1.00 34.12           C  
ATOM    144  CD1 TRP A  19     -23.521 -21.735  30.283  1.00 38.42           C  
ATOM    145  CD2 TRP A  19     -21.879 -21.586  28.704  1.00 43.20           C  
ATOM    146  NE1 TRP A  19     -23.378 -22.907  29.705  1.00 28.98           N  
ATOM    147  CE2 TRP A  19     -22.416 -22.861  28.769  1.00 43.13           C  
ATOM    148  CE3 TRP A  19     -20.869 -21.291  27.804  1.00 27.67           C  
ATOM    149  CZ2 TRP A  19     -21.955 -23.858  27.942  1.00 37.29           C  
ATOM    150  CZ3 TRP A  19     -20.404 -22.293  26.974  1.00 26.31           C  
ATOM    151  CH2 TRP A  19     -20.947 -23.560  27.045  1.00 34.35           C  
ATOM    152  N   ASN A  20     -19.915 -17.345  30.439  1.00 20.14           N  
ATOM    153  CA  ASN A  20     -19.610 -15.934  30.363  1.00 20.63           C  
ATOM    154  C   ASN A  20     -19.325 -15.585  28.909  1.00 21.59           C  
ATOM    155  O   ASN A  20     -18.824 -16.452  28.179  1.00 20.91           O  
ATOM    156  CB  ASN A  20     -18.358 -15.571  31.135  1.00 19.26           C  
ATOM    157  CG  ASN A  20     -18.632 -15.209  32.594  1.00 16.94           C  
ATOM    158  OD1 ASN A  20     -18.981 -14.061  32.912  1.00 19.32           O  
ATOM    159  ND2 ASN A  20     -18.356 -16.193  33.429  1.00 18.90           N  
ATOM    160  N   PHE A  21     -19.579 -14.348  28.511  1.00 20.31           N  
ATOM    161  CA  PHE A  21     -19.123 -13.839  27.208  1.00 18.80           C  
ATOM    162  C   PHE A  21     -17.596 -13.740  27.273  1.00 29.01           C  
ATOM    163  O   PHE A  21     -17.046 -13.375  28.323  1.00 18.59           O  
ATOM    164  CB  PHE A  21     -19.693 -12.434  26.920  1.00 15.96           C  
ATOM    165  CG  PHE A  21     -21.210 -12.260  26.798  1.00 16.47           C  
ATOM    166  CD1 PHE A  21     -22.038 -13.317  26.450  1.00 18.25           C  
ATOM    167  CD2 PHE A  21     -21.730 -11.004  27.047  1.00 17.20           C  
ATOM    168  CE1 PHE A  21     -23.387 -13.081  26.366  1.00 20.58           C  
ATOM    169  CE2 PHE A  21     -23.088 -10.789  26.954  1.00 18.95           C  
ATOM    170  CZ  PHE A  21     -23.906 -11.831  26.615  1.00 18.40           C  
ATOM    171  N   SER A  22     -16.849 -14.072  26.211  1.00 16.37           N  
ATOM    172  CA  SER A  22     -15.406 -13.978  26.201  1.00 15.71           C  
ATOM    173  C   SER A  22     -14.989 -13.518  24.795  1.00 27.98           C  
ATOM    174  O   SER A  22     -15.346 -14.160  23.810  1.00 18.52           O  
ATOM    175  CB  SER A  22     -14.824 -15.314  26.508  1.00 13.95           C  
ATOM    176  OG  SER A  22     -13.431 -15.173  26.702  1.00 17.49           O  
ATOM    177  N   SER A  23     -14.273 -12.416  24.652  1.00 17.53           N  
ATOM    178  CA  SER A  23     -13.869 -11.906  23.350  1.00 21.71           C  
ATOM    179  C   SER A  23     -12.546 -11.168  23.448  1.00 27.30           C  
ATOM    180  O   SER A  23     -12.101 -10.859  24.561  1.00 18.45           O  
ATOM    181  CB  SER A  23     -14.984 -11.006  22.851  1.00 13.04           C  
ATOM    182  OG  SER A  23     -15.192  -9.821  23.590  1.00 17.20           O  
ATOM    183  N   ARG A  24     -11.805 -10.927  22.371  1.00 16.47           N  
ATOM    184  CA  ARG A  24     -10.586 -10.139  22.390  1.00 18.28           C  
ATOM    185  C   ARG A  24     -10.232  -9.787  20.944  1.00 21.67           C  
ATOM    186  O   ARG A  24     -10.765 -10.417  20.032  1.00 17.72           O  
ATOM    187  CB  ARG A  24      -9.384 -10.889  22.934  1.00 14.39           C  
ATOM    188  CG  ARG A  24      -8.805 -12.022  22.187  1.00 17.95           C  
ATOM    189  CD  ARG A  24      -7.506 -12.385  22.785  1.00 18.22           C  
ATOM    190  NE  ARG A  24      -6.965 -13.447  21.943  1.00 16.16           N  
ATOM    191  CZ  ARG A  24      -5.984 -14.286  22.251  1.00 22.92           C  
ATOM    192  NH1 ARG A  24      -5.364 -14.285  23.426  1.00 23.47           N  
ATOM    193  NH2 ARG A  24      -5.544 -15.105  21.299  1.00 24.06           N  
ATOM    194  N   SER A  25      -9.355  -8.836  20.719  1.00 19.57           N  
ATOM    195  CA  SER A  25      -8.788  -8.593  19.406  1.00 19.55           C  
ATOM    196  C   SER A  25      -7.354  -8.200  19.668  1.00 22.34           C  
ATOM    197  O   SER A  25      -7.009  -7.632  20.724  1.00 18.07           O  
ATOM    198  CB  SER A  25      -9.563  -7.488  18.650  1.00 15.96           C  
ATOM    199  OG  SER A  25      -9.822  -6.295  19.331  1.00 31.90           O  
ATOM    200  N   ARG A  26      -6.442  -8.524  18.741  1.00 16.42           N  
ATOM    201  CA  ARG A  26      -5.006  -8.261  18.856  1.00 14.69           C  
ATOM    202  C   ARG A  26      -4.472  -7.806  17.479  1.00 18.06           C  
ATOM    203  O   ARG A  26      -5.093  -8.135  16.455  1.00 16.70           O  
ATOM    204  CB  ARG A  26      -4.249  -9.528  19.261  1.00 15.19           C  
ATOM    205  CG  ARG A  26      -4.855 -10.136  20.527  1.00 18.12           C  
ATOM    206  CD  ARG A  26      -3.970 -11.208  21.079  1.00 19.43           C  
ATOM    207  NE  ARG A  26      -3.803 -12.232  20.097  1.00 17.77           N  
ATOM    208  CZ  ARG A  26      -2.963 -13.245  20.234  1.00 29.11           C  
ATOM    209  NH1 ARG A  26      -2.202 -13.413  21.297  1.00 20.54           N  
ATOM    210  NH2 ARG A  26      -2.829 -14.114  19.235  1.00 23.76           N  
ATOM    211  N   VAL A  27      -3.371  -7.074  17.436  1.00 18.18           N  
ATOM    212  CA  VAL A  27      -2.700  -6.649  16.202  1.00 17.02           C  
ATOM    213  C   VAL A  27      -1.254  -7.078  16.396  1.00 20.98           C  
ATOM    214  O   VAL A  27      -0.700  -6.935  17.506  1.00 18.90           O  
ATOM    215  CB  VAL A  27      -2.810  -5.120  16.021  1.00 13.14           C  
ATOM    216  CG1 VAL A  27      -1.844  -4.555  14.983  1.00 20.80           C  
ATOM    217  CG2 VAL A  27      -4.232  -4.852  15.560  1.00 18.48           C  
ATOM    218  N   LEU A  28      -0.669  -7.658  15.334  1.00 13.21           N  
ATOM    219  CA  LEU A  28       0.727  -8.028  15.294  1.00 12.34           C  
ATOM    220  C   LEU A  28       1.508  -7.115  14.333  1.00 16.60           C  
ATOM    221  O   LEU A  28       1.087  -6.828  13.211  1.00 19.12           O  
ATOM    222  CB  LEU A  28       0.834  -9.503  14.877  1.00 15.44           C  
ATOM    223  CG  LEU A  28       2.234 -10.063  14.618  1.00 17.29           C  
ATOM    224  CD1 LEU A  28       3.075 -10.180  15.886  1.00 19.53           C  
ATOM    225  CD2 LEU A  28       2.062 -11.434  14.044  1.00 18.79           C  
ATOM    226  N   PHE A  29       2.623  -6.562  14.779  1.00 14.46           N  
ATOM    227  CA  PHE A  29       3.533  -5.760  13.971  1.00 19.10           C  
ATOM    228  C   PHE A  29       4.627  -6.700  13.519  1.00 28.14           C  
ATOM    229  O   PHE A  29       5.273  -7.290  14.396  1.00 19.55           O  
ATOM    230  CB  PHE A  29       4.201  -4.663  14.773  1.00 14.05           C  
ATOM    231  CG  PHE A  29       3.203  -3.682  15.339  1.00 21.24           C  
ATOM    232  CD1 PHE A  29       2.576  -2.776  14.523  1.00 17.81           C  
ATOM    233  CD2 PHE A  29       2.900  -3.706  16.696  1.00 23.31           C  
ATOM    234  CE1 PHE A  29       1.646  -1.902  15.054  1.00 26.27           C  
ATOM    235  CE2 PHE A  29       1.972  -2.831  17.226  1.00 20.41           C  
ATOM    236  CZ  PHE A  29       1.340  -1.928  16.407  1.00 22.27           C  
ATOM    237  N   THR A  30       4.879  -6.914  12.210  1.00 18.98           N  
ATOM    238  CA  THR A  30       6.001  -7.751  11.761  1.00 17.37           C  
ATOM    239  C   THR A  30       6.950  -6.853  11.010  1.00 18.66           C  
ATOM    240  O   THR A  30       6.537  -6.160  10.078  1.00 21.64           O  
ATOM    241  CB  THR A  30       5.535  -8.820  10.853  1.00 16.98           C  
ATOM    242  OG1 THR A  30       4.602  -9.605  11.567  1.00 23.49           O  
ATOM    243  CG2 THR A  30       6.660  -9.675  10.412  1.00 20.20           C  
ATOM    244  N   MET A  31       8.199  -6.782  11.425  1.00 16.66           N  
ATOM    245  CA  MET A  31       9.149  -5.864  10.838  1.00 17.95           C  
ATOM    246  C   MET A  31      10.236  -6.670  10.197  1.00 20.41           C  
ATOM    247  O   MET A  31      10.633  -7.704  10.743  1.00 16.53           O  
ATOM    248  CB  MET A  31       9.738  -4.957  11.902  1.00 18.36           C  
ATOM    249  CG  MET A  31       8.614  -4.154  12.542  1.00 28.91           C  
ATOM    250  SD  MET A  31       9.221  -2.829  13.578  1.00 29.44           S  
ATOM    251  CE  MET A  31       9.642  -3.773  14.989  1.00 24.49           C  
ATOM    252  N   SER A  32      10.719  -6.278   9.007  1.00 18.58           N  
ATOM    253  CA  SER A  32      11.747  -7.076   8.317  1.00 18.25           C  
ATOM    254  C   SER A  32      12.663  -6.231   7.441  1.00 17.77           C  
ATOM    255  O   SER A  32      12.309  -5.074   7.116  1.00 21.99           O  
ATOM    256  CB  SER A  32      11.084  -8.169   7.454  1.00 21.16           C  
ATOM    257  OG  SER A  32      10.036  -7.595   6.687  1.00 36.32           O  
ATOM    258  N   GLY A  33      13.846  -6.810   7.214  1.00 18.75           N  
ATOM    259  CA  GLY A  33      14.879  -6.169   6.423  1.00 19.45           C  
ATOM    260  C   GLY A  33      15.928  -7.193   5.988  1.00 19.89           C  
ATOM    261  O   GLY A  33      15.912  -8.349   6.429  1.00 18.98           O  
ATOM    262  N   THR A  34      16.861  -6.765   5.111  1.00 20.70           N  
ATOM    263  CA  THR A  34      17.891  -7.609   4.533  1.00 18.70           C  
ATOM    264  C   THR A  34      19.122  -6.741   4.408  1.00 15.56           C  
ATOM    265  O   THR A  34      19.002  -5.588   3.989  1.00 22.55           O  
ATOM    266  CB  THR A  34      17.516  -8.091   3.111  1.00 23.51           C  
ATOM    267  OG1 THR A  34      16.253  -8.696   3.212  1.00 25.34           O  
ATOM    268  CG2 THR A  34      18.429  -9.157   2.563  1.00 21.14           C  
ATOM    269  N   THR A  35      20.302  -7.237   4.741  1.00 16.89           N  
ATOM    270  CA  THR A  35      21.478  -6.410   4.639  1.00 19.04           C  
ATOM    271  C   THR A  35      21.964  -6.602   3.189  1.00 31.99           C  
ATOM    272  O   THR A  35      21.482  -7.478   2.459  1.00 22.91           O  
ATOM    273  CB  THR A  35      22.529  -6.898   5.632  1.00 21.23           C  
ATOM    274  OG1 THR A  35      22.879  -8.235   5.245  1.00 19.46           O  
ATOM    275  CG2 THR A  35      21.993  -6.888   7.090  1.00 20.86           C  
ATOM    276  N   ASP A  36      22.997  -5.869   2.796  1.00 26.13           N  
ATOM    277  CA  ASP A  36      23.590  -5.924   1.463  1.00 25.73           C  
ATOM    278  C   ASP A  36      24.060  -7.327   1.137  1.00 25.09           C  
ATOM    279  O   ASP A  36      23.867  -7.777   0.000  1.00 31.82           O  
ATOM    280  CB  ASP A  36      24.735  -4.929   1.425  1.00 23.29           C  
ATOM    281  CG  ASP A  36      24.297  -3.456   1.398  1.00 29.35           C  
ATOM    282  OD1 ASP A  36      23.086  -3.192   1.251  1.00 32.92           O  
ATOM    283  OD2 ASP A  36      25.180  -2.587   1.538  1.00 36.59           O  
ATOM    284  N   SER A  37      24.590  -8.117   2.070  1.00 25.70           N  
ATOM    285  CA  SER A  37      24.981  -9.467   1.714  1.00 23.90           C  
ATOM    286  C   SER A  37      23.883 -10.508   1.852  1.00 22.34           C  
ATOM    287  O   SER A  37      24.157 -11.702   1.670  1.00 24.38           O  
ATOM    288  CB  SER A  37      26.190  -9.852   2.557  1.00 30.09           C  
ATOM    289  OG  SER A  37      25.867  -9.979   3.940  1.00 48.00           O  
ATOM    290  N   GLY A  38      22.646 -10.103   2.203  1.00 21.78           N  
ATOM    291  CA  GLY A  38      21.563 -11.054   2.307  1.00 18.40           C  
ATOM    292  C   GLY A  38      21.344 -11.680   3.691  1.00 21.34           C  
ATOM    293  O   GLY A  38      20.692 -12.732   3.780  1.00 22.81           O  
ATOM    294  N   LEU A  39      21.905 -11.117   4.777  1.00 21.84           N  
ATOM    295  CA  LEU A  39      21.498 -11.566   6.115  1.00 23.27           C  
ATOM    296  C   LEU A  39      20.097 -10.977   6.290  1.00 19.54           C  
ATOM    297  O   LEU A  39      19.805  -9.851   5.869  1.00 23.50           O  
ATOM    298  CB  LEU A  39      22.375 -10.994   7.207  1.00 22.31           C  
ATOM    299  CG  LEU A  39      23.816 -11.396   7.138  1.00 21.30           C  
ATOM    300  CD1 LEU A  39      24.572 -10.776   8.272  1.00 28.69           C  
ATOM    301  CD2 LEU A  39      23.898 -12.869   7.179  1.00 25.27           C  
ATOM    302  N   GLU A  40      19.151 -11.696   6.862  1.00 18.39           N  
ATOM    303  CA  GLU A  40      17.800 -11.215   7.032  1.00 18.96           C  
ATOM    304  C   GLU A  40      17.670 -10.825   8.514  1.00 26.64           C  
ATOM    305  O   GLU A  40      18.276 -11.448   9.393  1.00 22.66           O  
ATOM    306  CB  GLU A  40      16.815 -12.318   6.729  1.00 21.71           C  
ATOM    307  CG  GLU A  40      16.895 -12.947   5.330  1.00 36.43           C  
ATOM    308  CD  GLU A  40      16.532 -11.980   4.209  1.00 58.73           C  
ATOM    309  OE1 GLU A  40      15.614 -11.176   4.367  1.00 52.82           O  
ATOM    310  OE2 GLU A  40      17.172 -12.043   3.163  1.00 61.13           O  
ATOM    311  N   PHE A  41      16.903  -9.813   8.825  1.00 23.28           N  
ATOM    312  CA  PHE A  41      16.729  -9.397  10.204  1.00 20.43           C  
ATOM    313  C   PHE A  41      15.288  -9.003  10.392  1.00 33.11           C  
ATOM    314  O   PHE A  41      14.563  -8.770   9.407  1.00 17.55           O  
ATOM    315  CB  PHE A  41      17.694  -8.252  10.489  1.00 17.40           C  
ATOM    316  CG  PHE A  41      17.603  -6.962   9.670  1.00 19.97           C  
ATOM    317  CD1 PHE A  41      16.752  -5.938  10.031  1.00 18.79           C  
ATOM    318  CD2 PHE A  41      18.455  -6.794   8.582  1.00 24.90           C  
ATOM    319  CE1 PHE A  41      16.740  -4.744   9.333  1.00 18.42           C  
ATOM    320  CE2 PHE A  41      18.444  -5.600   7.882  1.00 18.53           C  
ATOM    321  CZ  PHE A  41      17.594  -4.583   8.257  1.00 20.56           C  
ATOM    322  N   GLY A  42      14.810  -8.936  11.626  1.00 16.60           N  
ATOM    323  CA  GLY A  42      13.432  -8.570  11.827  1.00 15.94           C  
ATOM    324  C   GLY A  42      13.130  -8.441  13.326  1.00 18.51           C  
ATOM    325  O   GLY A  42      14.038  -8.612  14.142  1.00 17.74           O  
ATOM    326  N   ALA A  43      11.882  -8.141  13.619  1.00 19.68           N  
ATOM    327  CA  ALA A  43      11.393  -8.009  14.983  1.00 19.54           C  
ATOM    328  C   ALA A  43       9.876  -8.122  14.929  1.00 25.22           C  
ATOM    329  O   ALA A  43       9.252  -7.819  13.898  1.00 20.81           O  
ATOM    330  CB  ALA A  43      11.797  -6.646  15.537  1.00 16.52           C  
ATOM    331  N   SER A  44       9.180  -8.631  15.949  1.00 17.32           N  
ATOM    332  CA  SER A  44       7.736  -8.545  15.971  1.00 13.95           C  
ATOM    333  C   SER A  44       7.250  -8.527  17.428  1.00 17.36           C  
ATOM    334  O   SER A  44       7.963  -9.025  18.307  1.00 16.29           O  
ATOM    335  CB  SER A  44       7.093  -9.733  15.268  1.00 18.32           C  
ATOM    336  OG  SER A  44       7.556 -10.959  15.751  1.00 28.70           O  
ATOM    337  N   PHE A  45       6.076  -7.971  17.629  1.00 18.21           N  
ATOM    338  CA  PHE A  45       5.403  -7.974  18.916  1.00 19.59           C  
ATOM    339  C   PHE A  45       3.972  -7.562  18.664  1.00 21.25           C  
ATOM    340  O   PHE A  45       3.681  -7.002  17.593  1.00 19.84           O  
ATOM    341  CB  PHE A  45       6.102  -6.994  19.881  1.00 12.80           C  
ATOM    342  CG  PHE A  45       6.124  -5.522  19.533  1.00 16.76           C  
ATOM    343  CD1 PHE A  45       5.086  -4.685  19.910  1.00 13.03           C  
ATOM    344  CD2 PHE A  45       7.207  -4.996  18.829  1.00 15.77           C  
ATOM    345  CE1 PHE A  45       5.134  -3.325  19.575  1.00 18.11           C  
ATOM    346  CE2 PHE A  45       7.242  -3.644  18.503  1.00 14.29           C  
ATOM    347  CZ  PHE A  45       6.208  -2.799  18.869  1.00 18.49           C  
ATOM    348  N   LYS A  46       3.049  -7.825  19.601  1.00 14.65           N  
ATOM    349  CA  LYS A  46       1.661  -7.465  19.434  1.00 13.19           C  
ATOM    350  C   LYS A  46       1.393  -6.162  20.108  1.00 16.83           C  
ATOM    351  O   LYS A  46       2.154  -5.743  20.989  1.00 18.21           O  
ATOM    352  CB  LYS A  46       0.738  -8.518  20.001  1.00 14.48           C  
ATOM    353  CG  LYS A  46       1.038  -9.835  19.322  1.00 19.35           C  
ATOM    354  CD  LYS A  46      -0.003 -10.886  19.568  1.00 22.07           C  
ATOM    355  CE  LYS A  46       0.414 -12.179  18.892  1.00 29.45           C  
ATOM    356  NZ  LYS A  46       1.569 -12.753  19.553  1.00 30.58           N  
ATOM    357  N   ALA A  47       0.308  -5.501  19.763  1.00 13.74           N  
ATOM    358  CA  ALA A  47       0.078  -4.159  20.218  1.00 14.51           C  
ATOM    359  C   ALA A  47      -0.066  -4.148  21.761  1.00 17.84           C  
ATOM    360  O   ALA A  47       0.398  -3.213  22.427  1.00 16.71           O  
ATOM    361  CB  ALA A  47      -1.210  -3.622  19.625  1.00 13.21           C  
ATOM    362  N   HIS A  48      -0.708  -5.145  22.361  1.00 18.81           N  
ATOM    363  CA  HIS A  48      -0.891  -5.162  23.828  1.00 17.50           C  
ATOM    364  C   HIS A  48       0.419  -5.424  24.553  1.00 22.24           C  
ATOM    365  O   HIS A  48       0.466  -5.259  25.766  1.00 17.89           O  
ATOM    366  CB  HIS A  48      -1.945  -6.227  24.217  1.00 11.96           C  
ATOM    367  CG  HIS A  48      -1.534  -7.665  24.011  1.00 19.24           C  
ATOM    368  ND1 HIS A  48      -1.497  -8.384  22.895  1.00 19.50           N  
ATOM    369  CD2 HIS A  48      -1.086  -8.486  25.013  1.00 18.37           C  
ATOM    370  CE1 HIS A  48      -1.055  -9.584  23.167  1.00 20.35           C  
ATOM    371  NE2 HIS A  48      -0.808  -9.640  24.459  1.00 20.64           N  
ATOM    372  N   GLU A  49       1.498  -5.770  23.833  1.00 14.70           N  
ATOM    373  CA  GLU A  49       2.792  -6.076  24.377  1.00 14.46           C  
ATOM    374  C   GLU A  49       3.721  -4.937  24.115  1.00 14.22           C  
ATOM    375  O   GLU A  49       4.926  -5.114  24.355  1.00 15.82           O  
ATOM    376  CB  GLU A  49       3.502  -7.231  23.733  1.00 15.73           C  
ATOM    377  CG  GLU A  49       2.678  -8.470  23.628  1.00 24.60           C  
ATOM    378  CD  GLU A  49       3.401  -9.595  22.894  1.00 32.30           C  
ATOM    379  OE1 GLU A  49       3.947  -9.415  21.802  1.00 21.35           O  
ATOM    380  OE2 GLU A  49       3.405 -10.693  23.434  1.00 21.91           O  
ATOM    381  N   SER A  50       3.267  -3.778  23.639  1.00 14.73           N  
ATOM    382  CA  SER A  50       4.225  -2.763  23.249  1.00 13.74           C  
ATOM    383  C   SER A  50       5.102  -2.232  24.381  1.00 20.29           C  
ATOM    384  O   SER A  50       6.283  -1.952  24.134  1.00 16.11           O  
ATOM    385  CB ASER A  50       3.509  -1.575  22.648  0.60 12.78           C  
ATOM    386  CB BSER A  50       3.508  -1.603  22.576  0.40 12.35           C  
ATOM    387  OG ASER A  50       2.591  -1.903  21.621  0.60 15.12           O  
ATOM    388  OG BSER A  50       2.465  -1.023  23.337  0.40 13.87           O  
ATOM    389  N   VAL A  51       4.593  -2.082  25.643  1.00 15.56           N  
ATOM    390  CA  VAL A  51       5.457  -1.647  26.754  1.00 16.90           C  
ATOM    391  C   VAL A  51       6.573  -2.640  27.042  1.00 10.27           C  
ATOM    392  O   VAL A  51       7.741  -2.242  27.190  1.00 17.77           O  
ATOM    393  CB  VAL A  51       4.552  -1.433  27.990  1.00 16.34           C  
ATOM    394  CG1 VAL A  51       5.421  -1.112  29.187  1.00 18.56           C  
ATOM    395  CG2 VAL A  51       3.614  -0.273  27.756  1.00 16.82           C  
ATOM    396  N   GLY A  52       6.229  -3.936  27.076  1.00 12.24           N  
ATOM    397  CA  GLY A  52       7.179  -4.995  27.308  1.00 13.64           C  
ATOM    398  C   GLY A  52       8.163  -5.141  26.173  1.00 15.14           C  
ATOM    399  O   GLY A  52       9.333  -5.412  26.407  1.00 15.99           O  
ATOM    400  N   ALA A  53       7.731  -4.935  24.916  1.00 18.76           N  
ATOM    401  CA  ALA A  53       8.646  -5.080  23.781  1.00 14.32           C  
ATOM    402  C   ALA A  53       9.731  -4.043  23.846  1.00 10.54           C  
ATOM    403  O   ALA A  53      10.860  -4.300  23.428  1.00 15.30           O  
ATOM    404  CB  ALA A  53       7.858  -4.926  22.504  1.00 14.72           C  
ATOM    405  N   GLU A  54       9.478  -2.845  24.408  1.00 13.35           N  
ATOM    406  CA  GLU A  54      10.494  -1.846  24.572  1.00 13.86           C  
ATOM    407  C   GLU A  54      11.561  -2.194  25.631  1.00 17.54           C  
ATOM    408  O   GLU A  54      12.581  -1.509  25.658  1.00 17.99           O  
ATOM    409  CB  GLU A  54       9.754  -0.556  24.867  1.00 16.36           C  
ATOM    410  CG  GLU A  54      10.604   0.728  24.700  1.00 19.98           C  
ATOM    411  CD  GLU A  54      11.242   1.324  25.973  1.00 33.77           C  
ATOM    412  OE1 GLU A  54      10.752   1.040  27.063  1.00 26.33           O  
ATOM    413  OE2 GLU A  54      12.220   2.070  25.890  1.00 28.75           O  
ATOM    414  N   THR A  55      11.475  -3.220  26.506  1.00 19.05           N  
ATOM    415  CA  THR A  55      12.551  -3.557  27.444  1.00 15.96           C  
ATOM    416  C   THR A  55      13.110  -4.947  27.155  1.00 17.46           C  
ATOM    417  O   THR A  55      14.042  -5.381  27.817  1.00 21.17           O  
ATOM    418  CB  THR A  55      12.005  -3.513  28.919  1.00 13.94           C  
ATOM    419  OG1 THR A  55      11.287  -4.727  29.108  1.00 16.77           O  
ATOM    420  CG2 THR A  55      11.073  -2.348  29.195  1.00 18.93           C  
ATOM    421  N   GLY A  56      12.570  -5.748  26.218  1.00 18.11           N  
ATOM    422  CA  GLY A  56      13.084  -7.088  25.925  1.00 14.36           C  
ATOM    423  C   GLY A  56      12.237  -8.176  26.524  1.00 14.53           C  
ATOM    424  O   GLY A  56      12.434  -9.374  26.329  1.00 19.77           O  
ATOM    425  N   GLU A  57      11.236  -7.772  27.302  1.00 17.95           N  
ATOM    426  CA  GLU A  57      10.388  -8.714  28.003  1.00 14.56           C  
ATOM    427  C   GLU A  57       9.399  -9.429  27.094  1.00 19.55           C  
ATOM    428  O   GLU A  57       8.985 -10.570  27.364  1.00 18.74           O  
ATOM    429  CB  GLU A  57       9.647  -7.937  29.080  1.00 15.25           C  
ATOM    430  CG  GLU A  57       8.695  -8.852  29.844  1.00 25.44           C  
ATOM    431  CD  GLU A  57       7.968  -8.238  31.032  1.00 32.41           C  
ATOM    432  OE1 GLU A  57       7.965  -7.015  31.165  1.00 25.94           O  
ATOM    433  OE2 GLU A  57       7.404  -9.005  31.819  1.00 40.55           O  
ATOM    434  N   ASP A  58       8.907  -8.711  26.061  1.00 16.20           N  
ATOM    435  CA  ASP A  58       7.928  -9.271  25.141  1.00 12.73           C  
ATOM    436  C   ASP A  58       8.437  -9.040  23.703  1.00 13.30           C  
ATOM    437  O   ASP A  58       9.261  -8.155  23.492  1.00 14.77           O  
ATOM    438  CB  ASP A  58       6.608  -8.577  25.263  1.00 14.67           C  
ATOM    439  CG  ASP A  58       5.857  -8.919  26.553  1.00 21.34           C  
ATOM    440  OD1 ASP A  58       5.853 -10.077  26.968  1.00 21.30           O  
ATOM    441  OD2 ASP A  58       5.266  -8.004  27.106  1.00 23.15           O  
ATOM    442  N   GLY A  59       7.926  -9.816  22.763  1.00 19.15           N  
ATOM    443  CA  GLY A  59       8.326  -9.704  21.358  1.00 17.18           C  
ATOM    444  C   GLY A  59       9.697 -10.284  21.149  1.00 19.54           C  
ATOM    445  O   GLY A  59      10.389 -10.660  22.106  1.00 19.80           O  
ATOM    446  N   THR A  60      10.154 -10.452  19.904  1.00 16.10           N  
ATOM    447  CA  THR A  60      11.516 -10.939  19.634  1.00 16.20           C  
ATOM    448  C   THR A  60      12.208 -10.120  18.533  1.00 19.22           C  
ATOM    449  O   THR A  60      11.492  -9.446  17.781  1.00 17.59           O  
ATOM    450  CB  THR A  60      11.550 -12.410  19.180  1.00 22.89           C  
ATOM    451  OG1 THR A  60      10.585 -12.586  18.156  1.00 24.63           O  
ATOM    452  CG2 THR A  60      11.269 -13.368  20.330  1.00 22.82           C  
ATOM    453  N   VAL A  61      13.543 -10.107  18.509  1.00 17.23           N  
ATOM    454  CA  VAL A  61      14.372  -9.452  17.504  1.00 19.01           C  
ATOM    455  C   VAL A  61      15.238 -10.597  16.937  1.00 26.28           C  
ATOM    456  O   VAL A  61      15.644 -11.502  17.696  1.00 18.85           O  
ATOM    457  CB  VAL A  61      15.254  -8.357  18.149  1.00 17.83           C  
ATOM    458  CG1 VAL A  61      16.149  -7.691  17.106  1.00 18.08           C  
ATOM    459  CG2 VAL A  61      14.370  -7.300  18.743  1.00 17.74           C  
ATOM    460  N   PHE A  62      15.514 -10.677  15.619  1.00 19.51           N  
ATOM    461  CA  PHE A  62      16.360 -11.751  15.103  1.00 17.61           C  
ATOM    462  C   PHE A  62      17.285 -11.275  13.976  1.00 21.17           C  
ATOM    463  O   PHE A  62      17.061 -10.220  13.354  1.00 17.39           O  
ATOM    464  CB  PHE A  62      15.511 -12.906  14.593  1.00 17.41           C  
ATOM    465  CG  PHE A  62      14.791 -12.663  13.262  1.00 22.01           C  
ATOM    466  CD1 PHE A  62      15.435 -12.942  12.052  1.00 26.08           C  
ATOM    467  CD2 PHE A  62      13.491 -12.194  13.274  1.00 20.41           C  
ATOM    468  CE1 PHE A  62      14.763 -12.753  10.858  1.00 24.18           C  
ATOM    469  CE2 PHE A  62      12.832 -12.009  12.065  1.00 39.24           C  
ATOM    470  CZ  PHE A  62      13.459 -12.287  10.860  1.00 26.42           C  
ATOM    471  N   LEU A  63      18.313 -12.091  13.770  1.00 21.61           N  
ATOM    472  CA  LEU A  63      19.300 -11.936  12.695  1.00 23.98           C  
ATOM    473  C   LEU A  63      19.526 -13.326  12.165  1.00 24.88           C  
ATOM    474  O   LEU A  63      19.743 -14.212  12.996  1.00 20.07           O  
ATOM    475  CB  LEU A  63      20.666 -11.435  13.169  1.00 23.98           C  
ATOM    476  CG  LEU A  63      21.744 -11.227  12.093  1.00 27.68           C  
ATOM    477  CD1 LEU A  63      21.356 -10.091  11.154  1.00 22.99           C  
ATOM    478  CD2 LEU A  63      23.025 -10.825  12.760  1.00 34.32           C  
ATOM    479  N   SER A  64      19.433 -13.609  10.848  1.00 21.19           N  
ATOM    480  CA  SER A  64      19.710 -14.943  10.320  1.00 18.57           C  
ATOM    481  C   SER A  64      20.561 -14.868   9.041  1.00 18.66           C  
ATOM    482  O   SER A  64      20.680 -13.840   8.382  1.00 22.26           O  
ATOM    483  CB  SER A  64      18.431 -15.690  10.024  1.00 18.27           C  
ATOM    484  OG  SER A  64      17.538 -15.009   9.176  1.00 24.76           O  
ATOM    485  N   GLY A  65      21.253 -15.940   8.800  1.00 21.15           N  
ATOM    486  CA  GLY A  65      22.140 -16.038   7.682  1.00 24.41           C  
ATOM    487  C   GLY A  65      22.359 -17.507   7.432  1.00 28.66           C  
ATOM    488  O   GLY A  65      21.615 -18.399   7.867  1.00 22.09           O  
ATOM    489  N   ALA A  66      23.471 -17.768   6.775  1.00 26.28           N  
ATOM    490  CA  ALA A  66      23.831 -19.125   6.445  1.00 25.46           C  
ATOM    491  C   ALA A  66      24.142 -19.955   7.687  1.00 26.02           C  
ATOM    492  O   ALA A  66      24.006 -21.176   7.675  1.00 27.00           O  
ATOM    493  CB  ALA A  66      25.052 -19.103   5.562  1.00 28.91           C  
ATOM    494  N   PHE A  67      24.560 -19.236   8.733  1.00 33.18           N  
ATOM    495  CA  PHE A  67      24.872 -19.766  10.064  1.00 33.95           C  
ATOM    496  C   PHE A  67      23.639 -20.176  10.879  1.00 35.16           C  
ATOM    497  O   PHE A  67      23.792 -20.833  11.897  1.00 30.66           O  
ATOM    498  CB  PHE A  67      25.670 -18.717  10.875  1.00 23.01           C  
ATOM    499  CG  PHE A  67      24.970 -17.367  11.142  1.00 45.98           C  
ATOM    500  CD1 PHE A  67      24.078 -17.228  12.210  1.00 41.66           C  
ATOM    501  CD2 PHE A  67      25.204 -16.287  10.294  1.00 34.67           C  
ATOM    502  CE1 PHE A  67      23.430 -16.028  12.410  1.00 40.95           C  
ATOM    503  CE2 PHE A  67      24.550 -15.087  10.505  1.00 32.83           C  
ATOM    504  CZ  PHE A  67      23.665 -14.960  11.562  1.00 35.21           C  
ATOM    505  N   GLY A  68      22.416 -19.819  10.532  1.00 20.84           N  
ATOM    506  CA  GLY A  68      21.265 -20.203  11.306  1.00 21.82           C  
ATOM    507  C   GLY A  68      20.642 -18.916  11.769  1.00 28.92           C  
ATOM    508  O   GLY A  68      20.925 -17.877  11.156  1.00 24.29           O  
ATOM    509  N   LYS A  69      19.851 -18.891  12.843  1.00 21.72           N  
ATOM    510  CA  LYS A  69      19.098 -17.707  13.231  1.00 18.84           C  
ATOM    511  C   LYS A  69      19.320 -17.462  14.730  1.00 23.51           C  
ATOM    512  O   LYS A  69      19.251 -18.415  15.506  1.00 20.90           O  
ATOM    513  CB  LYS A  69      17.634 -17.977  12.954  1.00 16.30           C  
ATOM    514  CG  LYS A  69      16.700 -16.815  13.294  1.00 16.85           C  
ATOM    515  CD  LYS A  69      15.304 -17.356  13.064  1.00 20.17           C  
ATOM    516  CE  LYS A  69      14.288 -16.324  13.436  1.00 31.92           C  
ATOM    517  NZ  LYS A  69      12.951 -16.787  13.098  1.00 46.73           N  
ATOM    518  N   ILE A  70      19.558 -16.242  15.121  1.00 19.45           N  
ATOM    519  CA  ILE A  70      19.738 -15.850  16.517  1.00 23.74           C  
ATOM    520  C   ILE A  70      18.550 -14.960  16.846  1.00 25.87           C  
ATOM    521  O   ILE A  70      18.354 -13.935  16.184  1.00 20.11           O  
ATOM    522  CB  ILE A  70      21.033 -15.053  16.665  1.00 25.58           C  
ATOM    523  CG1 ILE A  70      22.222 -15.938  16.316  1.00 43.31           C  
ATOM    524  CG2 ILE A  70      21.155 -14.549  18.101  1.00 33.44           C  
ATOM    525  CD1 ILE A  70      23.489 -15.098  16.072  1.00 57.37           C  
ATOM    526  N   GLU A  71      17.762 -15.262  17.870  1.00 19.38           N  
ATOM    527  CA  GLU A  71      16.580 -14.500  18.236  1.00 17.37           C  
ATOM    528  C   GLU A  71      16.710 -14.081  19.723  1.00 24.39           C  
ATOM    529  O   GLU A  71      17.124 -14.941  20.523  1.00 20.85           O  
ATOM    530  CB  GLU A  71      15.440 -15.420  18.004  1.00 15.42           C  
ATOM    531  CG  GLU A  71      14.084 -14.781  18.104  1.00 22.29           C  
ATOM    532  CD  GLU A  71      12.943 -15.740  17.774  1.00 23.14           C  
ATOM    533  OE1 GLU A  71      13.125 -16.928  17.975  1.00 42.67           O  
ATOM    534  OE2 GLU A  71      11.889 -15.293  17.301  1.00 53.77           O  
ATOM    535  N   MET A  72      16.371 -12.852  20.135  1.00 19.50           N  
ATOM    536  CA  MET A  72      16.509 -12.441  21.530  1.00 17.32           C  
ATOM    537  C   MET A  72      15.222 -11.759  21.904  1.00 23.46           C  
ATOM    538  O   MET A  72      14.672 -11.008  21.078  1.00 19.57           O  
ATOM    539  CB  MET A  72      17.661 -11.496  21.646  1.00 18.57           C  
ATOM    540  CG  MET A  72      18.009 -11.158  23.111  1.00 19.11           C  
ATOM    541  SD  MET A  72      19.490 -10.156  23.277  1.00 23.42           S  
ATOM    542  CE  MET A  72      20.692 -11.366  22.863  1.00 18.32           C  
ATOM    543  N   GLY A  73      14.688 -12.049  23.105  1.00 17.35           N  
ATOM    544  CA  GLY A  73      13.504 -11.376  23.637  1.00 14.94           C  
ATOM    545  C   GLY A  73      12.683 -12.424  24.343  1.00 13.51           C  
ATOM    546  O   GLY A  73      13.232 -13.308  25.002  1.00 18.04           O  
ATOM    547  N   ASP A  74      11.386 -12.433  24.107  1.00 15.69           N  
ATOM    548  CA  ASP A  74      10.515 -13.406  24.681  1.00 17.65           C  
ATOM    549  C   ASP A  74      10.486 -14.603  23.728  1.00 22.75           C  
ATOM    550  O   ASP A  74       9.524 -14.828  23.003  1.00 21.21           O  
ATOM    551  CB  ASP A  74       9.137 -12.740  24.892  1.00 14.59           C  
ATOM    552  CG  ASP A  74       8.076 -13.590  25.598  1.00 19.98           C  
ATOM    553  OD1 ASP A  74       8.318 -14.775  25.902  1.00 18.00           O  
ATOM    554  OD2 ASP A  74       6.980 -13.063  25.837  1.00 24.40           O  
ATOM    555  N   ALA A  75      11.532 -15.419  23.750  1.00 18.50           N  
ATOM    556  CA  ALA A  75      11.713 -16.573  22.864  1.00 19.75           C  
ATOM    557  C   ALA A  75      11.337 -17.890  23.491  1.00 25.86           C  
ATOM    558  O   ALA A  75      11.278 -18.023  24.725  1.00 24.49           O  
ATOM    559  CB  ALA A  75      13.178 -16.655  22.429  1.00 15.70           C  
ATOM    560  N   LEU A  76      11.070 -18.878  22.664  1.00 18.04           N  
ATOM    561  CA  LEU A  76      10.802 -20.214  23.107  1.00 15.51           C  
ATOM    562  C   LEU A  76      12.092 -20.838  23.503  1.00 14.71           C  
ATOM    563  O   LEU A  76      13.152 -20.342  23.143  1.00 17.59           O  
ATOM    564  CB  LEU A  76      10.206 -21.060  22.015  1.00 16.00           C  
ATOM    565  CG  LEU A  76       8.883 -20.535  21.479  1.00 22.46           C  
ATOM    566  CD1 LEU A  76       8.475 -21.434  20.341  1.00 21.79           C  
ATOM    567  CD2 LEU A  76       7.799 -20.480  22.572  1.00 22.12           C  
ATOM    568  N   GLY A  77      12.076 -21.891  24.310  1.00 17.76           N  
ATOM    569  CA  GLY A  77      13.327 -22.567  24.572  1.00 17.10           C  
ATOM    570  C   GLY A  77      13.556 -23.559  23.419  1.00 17.15           C  
ATOM    571  O   GLY A  77      12.610 -23.809  22.655  1.00 18.35           O  
ATOM    572  N   ALA A  78      14.754 -24.139  23.296  1.00 20.25           N  
ATOM    573  CA  ALA A  78      15.128 -25.036  22.197  1.00 16.35           C  
ATOM    574  C   ALA A  78      14.198 -26.183  21.912  1.00 23.67           C  
ATOM    575  O   ALA A  78      13.814 -26.393  20.755  1.00 22.78           O  
ATOM    576  CB  ALA A  78      16.462 -25.588  22.481  1.00 18.71           C  
ATOM    577  N   SER A  79      13.714 -26.937  22.908  1.00 18.97           N  
ATOM    578  CA  SER A  79      12.786 -28.017  22.665  1.00 20.71           C  
ATOM    579  C   SER A  79      11.439 -27.556  22.153  1.00 27.48           C  
ATOM    580  O   SER A  79      10.922 -28.131  21.189  1.00 21.54           O  
ATOM    581  CB  SER A  79      12.560 -28.836  23.938  1.00 24.34           C  
ATOM    582  OG  SER A  79      13.824 -29.214  24.459  1.00 24.45           O  
ATOM    583  N   GLU A  80      10.819 -26.536  22.748  1.00 20.47           N  
ATOM    584  CA  GLU A  80       9.535 -26.056  22.298  1.00 18.48           C  
ATOM    585  C   GLU A  80       9.685 -25.501  20.868  1.00 15.64           C  
ATOM    586  O   GLU A  80       8.783 -25.769  20.080  1.00 21.68           O  
ATOM    587  CB  GLU A  80       9.069 -24.969  23.223  1.00 14.52           C  
ATOM    588  CG  GLU A  80       7.633 -24.660  22.893  1.00 19.36           C  
ATOM    589  CD  GLU A  80       6.848 -23.844  23.889  1.00 21.31           C  
ATOM    590  OE1 GLU A  80       7.308 -23.565  24.990  1.00 23.28           O  
ATOM    591  OE2 GLU A  80       5.698 -23.516  23.611  1.00 17.31           O  
ATOM    592  N   ALA A  81      10.788 -24.801  20.564  1.00 18.80           N  
ATOM    593  CA  ALA A  81      11.098 -24.231  19.243  1.00 19.97           C  
ATOM    594  C   ALA A  81      11.057 -25.363  18.192  1.00 25.91           C  
ATOM    595  O   ALA A  81      10.494 -25.167  17.108  1.00 26.82           O  
ATOM    596  CB  ALA A  81      12.488 -23.601  19.244  1.00 18.56           C  
ATOM    597  N   LEU A  82      11.536 -26.581  18.470  1.00 24.81           N  
ATOM    598  CA  LEU A  82      11.430 -27.667  17.504  1.00 20.49           C  
ATOM    599  C   LEU A  82      10.182 -28.507  17.592  1.00 30.61           C  
ATOM    600  O   LEU A  82       9.701 -28.908  16.531  1.00 30.38           O  
ATOM    601  CB  LEU A  82      12.645 -28.604  17.602  1.00 18.07           C  
ATOM    602  CG  LEU A  82      14.010 -27.947  17.469  1.00 23.91           C  
ATOM    603  CD1 LEU A  82      15.093 -28.988  17.327  1.00 21.74           C  
ATOM    604  CD2 LEU A  82      13.996 -27.023  16.282  1.00 22.55           C  
ATOM    605  N   PHE A  83       9.531 -28.797  18.743  1.00 23.86           N  
ATOM    606  CA  PHE A  83       8.420 -29.760  18.772  1.00 18.13           C  
ATOM    607  C   PHE A  83       7.055 -29.177  18.997  1.00 21.39           C  
ATOM    608  O   PHE A  83       6.075 -29.879  18.742  1.00 24.29           O  
ATOM    609  CB  PHE A  83       8.669 -30.868  19.847  1.00 20.46           C  
ATOM    610  CG  PHE A  83      10.096 -31.430  19.770  1.00 31.47           C  
ATOM    611  CD1 PHE A  83      10.595 -31.925  18.569  1.00 36.76           C  
ATOM    612  CD2 PHE A  83      10.920 -31.396  20.884  1.00 29.87           C  
ATOM    613  CE1 PHE A  83      11.894 -32.359  18.508  1.00 29.95           C  
ATOM    614  CE2 PHE A  83      12.217 -31.832  20.811  1.00 27.18           C  
ATOM    615  CZ  PHE A  83      12.701 -32.308  19.620  1.00 28.91           C  
ATOM    616  N   GLY A  84       6.950 -27.901  19.432  1.00 21.59           N  
ATOM    617  CA  GLY A  84       5.655 -27.273  19.633  1.00 19.54           C  
ATOM    618  C   GLY A  84       4.752 -27.918  20.688  1.00 20.13           C  
ATOM    619  O   GLY A  84       5.208 -28.576  21.628  1.00 24.79           O  
ATOM    620  N   ASP A  85       3.452 -27.708  20.541  1.00 18.15           N  
ATOM    621  CA  ASP A  85       2.428 -28.142  21.477  1.00 22.04           C  
ATOM    622  C   ASP A  85       1.488 -29.149  20.869  1.00 32.84           C  
ATOM    623  O   ASP A  85       1.564 -29.420  19.679  1.00 25.86           O  
ATOM    624  CB  ASP A  85       1.613 -26.922  21.969  1.00 21.66           C  
ATOM    625  CG  ASP A  85       2.469 -26.050  22.883  1.00 22.97           C  
ATOM    626  OD1 ASP A  85       3.261 -26.564  23.668  1.00 22.67           O  
ATOM    627  OD2 ASP A  85       2.388 -24.840  22.763  1.00 22.22           O  
ATOM    628  N   LEU A  86       0.563 -29.709  21.643  1.00 21.52           N  
ATOM    629  CA  LEU A  86      -0.397 -30.678  21.160  1.00 19.15           C  
ATOM    630  C   LEU A  86      -1.549 -29.874  20.579  1.00 18.35           C  
ATOM    631  O   LEU A  86      -1.559 -28.627  20.662  1.00 21.62           O  
ATOM    632  CB  LEU A  86      -0.857 -31.592  22.322  1.00 18.02           C  
ATOM    633  CG  LEU A  86       0.206 -32.397  23.057  1.00 21.20           C  
ATOM    634  CD1 LEU A  86      -0.562 -33.296  24.012  1.00 24.06           C  
ATOM    635  CD2 LEU A  86       1.083 -33.271  22.144  1.00 22.07           C  
ATOM    636  N   TYR A  87      -2.516 -30.554  19.969  1.00 20.03           N  
ATOM    637  CA  TYR A  87      -3.665 -29.918  19.323  1.00 23.10           C  
ATOM    638  C   TYR A  87      -4.395 -28.937  20.251  1.00 35.01           C  
ATOM    639  O   TYR A  87      -4.824 -29.313  21.327  1.00 21.25           O  
ATOM    640  CB  TYR A  87      -4.648 -31.014  18.836  1.00 22.33           C  
ATOM    641  CG  TYR A  87      -5.850 -30.450  18.083  1.00 24.26           C  
ATOM    642  CD1 TYR A  87      -5.703 -29.865  16.826  1.00 29.11           C  
ATOM    643  CD2 TYR A  87      -7.092 -30.502  18.680  1.00 25.25           C  
ATOM    644  CE1 TYR A  87      -6.812 -29.336  16.187  1.00 24.19           C  
ATOM    645  CE2 TYR A  87      -8.197 -29.969  18.054  1.00 23.60           C  
ATOM    646  CZ  TYR A  87      -8.038 -29.393  16.820  1.00 32.01           C  
ATOM    647  OH  TYR A  87      -9.141 -28.823  16.238  1.00 38.33           O  
ATOM    648  N   GLU A  88      -4.612 -27.696  19.830  1.00 24.04           N  
ATOM    649  CA  GLU A  88      -5.228 -26.664  20.628  1.00 23.00           C  
ATOM    650  C   GLU A  88      -6.711 -26.782  20.555  1.00 28.26           C  
ATOM    651  O   GLU A  88      -7.325 -26.777  19.487  1.00 25.13           O  
ATOM    652  CB  GLU A  88      -4.745 -25.312  20.120  1.00 19.61           C  
ATOM    653  CG  GLU A  88      -5.293 -24.187  20.941  1.00 19.84           C  
ATOM    654  CD  GLU A  88      -4.733 -22.814  20.603  1.00 19.96           C  
ATOM    655  OE1 GLU A  88      -3.531 -22.588  20.634  1.00 22.24           O  
ATOM    656  OE2 GLU A  88      -5.525 -21.927  20.345  1.00 28.96           O  
ATOM    657  N   VAL A  89      -7.293 -26.892  21.731  1.00 20.98           N  
ATOM    658  CA  VAL A  89      -8.725 -27.043  21.863  1.00 19.79           C  
ATOM    659  C   VAL A  89      -9.368 -25.772  22.381  1.00 21.24           C  
ATOM    660  O   VAL A  89      -8.820 -25.141  23.301  1.00 25.75           O  
ATOM    661  CB  VAL A  89      -8.985 -28.240  22.811  1.00 21.18           C  
ATOM    662  CG1 VAL A  89     -10.471 -28.313  23.162  1.00 20.32           C  
ATOM    663  CG2 VAL A  89      -8.500 -29.529  22.147  1.00 23.18           C  
ATOM    664  N   GLY A  90     -10.544 -25.508  21.775  1.00 18.46           N  
ATOM    665  CA  GLY A  90     -11.503 -24.447  22.072  1.00 17.42           C  
ATOM    666  C   GLY A  90     -11.182 -23.088  21.423  1.00 16.29           C  
ATOM    667  O   GLY A  90     -10.017 -22.772  21.178  1.00 21.52           O  
ATOM    668  N   TYR A  91     -12.170 -22.231  21.137  1.00 15.81           N  
ATOM    669  CA  TYR A  91     -11.894 -20.937  20.537  1.00 16.90           C  
ATOM    670  C   TYR A  91     -11.119 -20.046  21.479  1.00 20.78           C  
ATOM    671  O   TYR A  91     -10.452 -19.147  20.996  1.00 20.06           O  
ATOM    672  CB  TYR A  91     -13.201 -20.266  20.121  1.00 14.86           C  
ATOM    673  CG  TYR A  91     -13.911 -19.353  21.115  1.00 20.42           C  
ATOM    674  CD1 TYR A  91     -13.614 -18.019  21.136  1.00 17.43           C  
ATOM    675  CD2 TYR A  91     -14.866 -19.845  21.983  1.00 21.36           C  
ATOM    676  CE1 TYR A  91     -14.268 -17.195  22.018  1.00 21.64           C  
ATOM    677  CE2 TYR A  91     -15.536 -19.021  22.871  1.00 17.13           C  
ATOM    678  CZ  TYR A  91     -15.218 -17.704  22.874  1.00 16.53           C  
ATOM    679  OH  TYR A  91     -15.829 -16.860  23.749  1.00 19.49           O  
ATOM    680  N   THR A  92     -11.188 -20.209  22.824  1.00 22.98           N  
ATOM    681  CA  THR A  92     -10.447 -19.354  23.771  1.00 20.64           C  
ATOM    682  C   THR A  92      -9.123 -20.013  24.167  1.00 19.15           C  
ATOM    683  O   THR A  92      -8.362 -19.403  24.901  1.00 20.90           O  
ATOM    684  CB  THR A  92     -11.280 -19.076  25.084  1.00 15.66           C  
ATOM    685  OG1 THR A  92     -11.525 -20.348  25.670  1.00 19.23           O  
ATOM    686  CG2 THR A  92     -12.624 -18.457  24.881  1.00 13.61           C  
ATOM    687  N   ASP A  93      -8.787 -21.221  23.667  1.00 18.00           N  
ATOM    688  CA  ASP A  93      -7.643 -22.059  24.031  1.00 18.24           C  
ATOM    689  C   ASP A  93      -7.851 -22.464  25.485  1.00 25.81           C  
ATOM    690  O   ASP A  93      -7.377 -21.806  26.430  1.00 22.47           O  
ATOM    691  CB  ASP A  93      -6.291 -21.317  23.863  1.00 17.88           C  
ATOM    692  CG  ASP A  93      -5.053 -22.146  24.152  1.00 20.65           C  
ATOM    693  OD1 ASP A  93      -5.084 -23.364  24.383  1.00 25.25           O  
ATOM    694  OD2 ASP A  93      -3.957 -21.594  24.164  1.00 20.38           O  
ATOM    695  N   LEU A  94      -8.639 -23.527  25.668  1.00 23.49           N  
ATOM    696  CA  LEU A  94      -9.100 -23.935  27.007  1.00 22.32           C  
ATOM    697  C   LEU A  94      -8.008 -24.604  27.802  1.00 20.94           C  
ATOM    698  O   LEU A  94      -7.974 -25.821  27.928  1.00 22.40           O  
ATOM    699  CB  LEU A  94     -10.273 -24.902  26.917  1.00 24.80           C  
ATOM    700  CG  LEU A  94     -11.581 -24.375  26.447  1.00 24.83           C  
ATOM    701  CD1 LEU A  94     -12.516 -25.561  26.131  1.00 24.63           C  
ATOM    702  CD2 LEU A  94     -12.146 -23.440  27.488  1.00 23.77           C  
ATOM    703  N   ASP A  95      -7.099 -23.826  28.366  1.00 18.41           N  
ATOM    704  CA  ASP A  95      -6.002 -24.365  29.143  1.00 18.77           C  
ATOM    705  C   ASP A  95      -6.284 -24.434  30.644  1.00 24.15           C  
ATOM    706  O   ASP A  95      -5.442 -24.795  31.454  1.00 20.30           O  
ATOM    707  CB  ASP A  95      -4.809 -23.519  28.974  1.00 17.45           C  
ATOM    708  CG  ASP A  95      -4.129 -23.674  27.640  1.00 24.99           C  
ATOM    709  OD1 ASP A  95      -4.161 -24.728  27.031  1.00 21.65           O  
ATOM    710  OD2 ASP A  95      -3.530 -22.716  27.180  1.00 22.05           O  
ATOM    711  N   ASP A  96      -7.492 -24.085  31.012  1.00 20.70           N  
ATOM    712  CA  ASP A  96      -7.930 -23.954  32.391  1.00 32.92           C  
ATOM    713  C   ASP A  96      -7.735 -25.224  33.224  1.00 36.10           C  
ATOM    714  O   ASP A  96      -7.517 -25.108  34.428  1.00 35.21           O  
ATOM    715  CB  ASP A  96      -9.409 -23.549  32.372  1.00 30.21           C  
ATOM    716  CG  ASP A  96      -9.729 -22.319  31.536  1.00 59.42           C  
ATOM    717  OD1 ASP A  96      -9.849 -22.388  30.298  1.00 30.49           O  
ATOM    718  OD2 ASP A  96      -9.838 -21.277  32.168  1.00 41.87           O  
ATOM    719  N   ARG A  97      -7.799 -26.443  32.668  1.00 26.01           N  
ATOM    720  CA  ARG A  97      -7.645 -27.688  33.412  1.00 19.44           C  
ATOM    721  C   ARG A  97      -6.329 -28.368  33.142  1.00 21.06           C  
ATOM    722  O   ARG A  97      -6.125 -29.539  33.499  1.00 27.98           O  
ATOM    723  CB  ARG A  97      -8.821 -28.616  33.064  1.00 19.30           C  
ATOM    724  CG  ARG A  97     -10.199 -28.149  33.511  1.00 23.19           C  
ATOM    725  CD  ARG A  97     -10.293 -28.108  35.047  1.00 30.26           C  
ATOM    726  NE  ARG A  97     -11.599 -27.602  35.423  1.00 30.05           N  
ATOM    727  CZ  ARG A  97     -11.841 -26.321  35.774  1.00 29.77           C  
ATOM    728  NH1 ARG A  97     -10.861 -25.427  35.835  1.00 40.21           N  
ATOM    729  NH2 ARG A  97     -13.097 -25.868  35.956  1.00 29.73           N  
ATOM    730  N   GLY A  98      -5.379 -27.669  32.518  1.00 22.17           N  
ATOM    731  CA  GLY A  98      -4.081 -28.250  32.166  1.00 19.78           C  
ATOM    732  C   GLY A  98      -3.587 -27.777  30.785  1.00 21.06           C  
ATOM    733  O   GLY A  98      -2.408 -27.445  30.590  1.00 26.48           O  
ATOM    734  N   GLY A  99      -4.531 -27.865  29.847  1.00 26.61           N  
ATOM    735  CA  GLY A  99      -4.325 -27.364  28.504  1.00 26.18           C  
ATOM    736  C   GLY A  99      -3.553 -28.261  27.572  1.00 24.45           C  
ATOM    737  O   GLY A  99      -3.059 -29.334  27.906  1.00 23.54           O  
ATOM    738  N   ASN A 100      -3.380 -27.785  26.358  1.00 25.90           N  
ATOM    739  CA  ASN A 100      -2.760 -28.567  25.281  1.00 19.24           C  
ATOM    740  C   ASN A 100      -1.272 -28.389  25.247  1.00 19.02           C  
ATOM    741  O   ASN A 100      -0.561 -29.090  24.545  1.00 22.88           O  
ATOM    742  CB  ASN A 100      -3.383 -28.115  23.946  1.00 23.30           C  
ATOM    743  CG  ASN A 100      -3.047 -26.667  23.616  1.00 22.39           C  
ATOM    744  OD1 ASN A 100      -3.379 -25.727  24.342  1.00 24.51           O  
ATOM    745  ND2 ASN A 100      -2.335 -26.428  22.526  1.00 21.36           N  
ATOM    746  N   ASP A 101      -0.712 -27.422  25.954  1.00 21.84           N  
ATOM    747  CA  ASP A 101       0.699 -27.106  25.874  1.00 16.59           C  
ATOM    748  C   ASP A 101       1.559 -28.190  26.422  1.00 26.25           C  
ATOM    749  O   ASP A 101       1.207 -28.795  27.422  1.00 24.73           O  
ATOM    750  CB  ASP A 101       0.994 -25.823  26.639  1.00 17.86           C  
ATOM    751  CG  ASP A 101       0.141 -24.622  26.220  1.00 18.10           C  
ATOM    752  OD1 ASP A 101      -1.064 -24.668  25.870  1.00 23.14           O  
ATOM    753  OD2 ASP A 101       0.747 -23.573  26.231  1.00 23.00           O  
ATOM    754  N   ILE A 102       2.666 -28.500  25.798  1.00 19.76           N  
ATOM    755  CA  ILE A 102       3.537 -29.509  26.333  1.00 21.70           C  
ATOM    756  C   ILE A 102       4.321 -28.842  27.477  1.00 22.28           C  
ATOM    757  O   ILE A 102       4.686 -27.665  27.349  1.00 20.29           O  
ATOM    758  CB  ILE A 102       4.443 -30.043  25.154  1.00 19.72           C  
ATOM    759  CG1 ILE A 102       3.599 -30.939  24.230  1.00 25.08           C  
ATOM    760  CG2 ILE A 102       5.665 -30.807  25.682  1.00 18.10           C  
ATOM    761  CD1 ILE A 102       4.422 -31.467  23.005  1.00 22.45           C  
ATOM    762  N   PRO A 103       4.621 -29.544  28.600  1.00 24.84           N  
ATOM    763  CA  PRO A 103       5.227 -28.946  29.789  1.00 28.04           C  
ATOM    764  C   PRO A 103       6.720 -28.787  29.684  1.00 25.87           C  
ATOM    765  O   PRO A 103       7.484 -29.523  30.324  1.00 26.05           O  
ATOM    766  CB  PRO A 103       4.775 -29.866  30.923  1.00 21.68           C  
ATOM    767  CG  PRO A 103       4.679 -31.225  30.267  1.00 24.38           C  
ATOM    768  CD  PRO A 103       4.108 -30.899  28.902  1.00 21.16           C  
ATOM    769  N   TYR A 104       7.182 -27.838  28.863  1.00 18.31           N  
ATOM    770  CA  TYR A 104       8.608 -27.635  28.761  1.00 18.73           C  
ATOM    771  C   TYR A 104       9.073 -26.921  30.023  1.00 20.07           C  
ATOM    772  O   TYR A 104       8.361 -26.098  30.593  1.00 21.70           O  
ATOM    773  CB  TYR A 104       8.971 -26.789  27.514  1.00 20.72           C  
ATOM    774  CG  TYR A 104       8.556 -27.514  26.228  1.00 20.99           C  
ATOM    775  CD1 TYR A 104       9.331 -28.550  25.758  1.00 23.25           C  
ATOM    776  CD2 TYR A 104       7.414 -27.137  25.529  1.00 21.35           C  
ATOM    777  CE1 TYR A 104       8.951 -29.198  24.590  1.00 23.05           C  
ATOM    778  CE2 TYR A 104       7.042 -27.786  24.360  1.00 18.76           C  
ATOM    779  CZ  TYR A 104       7.830 -28.816  23.914  1.00 22.33           C  
ATOM    780  OH  TYR A 104       7.505 -29.528  22.797  1.00 26.62           O  
ATOM    781  N   LEU A 105      10.287 -27.267  30.428  1.00 19.68           N  
ATOM    782  CA  LEU A 105      10.892 -26.687  31.606  1.00 27.46           C  
ATOM    783  C   LEU A 105      11.398 -25.269  31.384  1.00 24.74           C  
ATOM    784  O   LEU A 105      11.335 -24.466  32.314  1.00 18.69           O  
ATOM    785  CB  LEU A 105      12.060 -27.619  32.094  1.00 24.81           C  
ATOM    786  CG  LEU A 105      12.850 -27.282  33.414  1.00 23.54           C  
ATOM    787  CD1 LEU A 105      11.903 -27.421  34.607  1.00 22.08           C  
ATOM    788  CD2 LEU A 105      14.036 -28.212  33.581  1.00 19.57           C  
ATOM    789  N   THR A 106      11.939 -24.878  30.204  1.00 22.99           N  
ATOM    790  CA  THR A 106      12.566 -23.563  30.052  1.00 22.98           C  
ATOM    791  C   THR A 106      11.922 -22.739  28.921  1.00 18.20           C  
ATOM    792  O   THR A 106      11.066 -23.276  28.199  1.00 21.22           O  
ATOM    793  CB  THR A 106      14.132 -23.718  29.810  1.00 29.35           C  
ATOM    794  OG1 THR A 106      14.327 -24.208  28.473  1.00 25.92           O  
ATOM    795  CG2 THR A 106      14.823 -24.635  30.873  1.00 19.42           C  
ATOM    796  N   GLY A 107      12.329 -21.461  28.785  1.00 17.26           N  
ATOM    797  CA  GLY A 107      11.894 -20.551  27.729  1.00 18.97           C  
ATOM    798  C   GLY A 107      10.440 -20.263  27.925  1.00 27.01           C  
ATOM    799  O   GLY A 107       9.838 -20.634  28.939  1.00 22.34           O  
ATOM    800  N   ASP A 108       9.898 -19.520  26.977  1.00 18.09           N  
ATOM    801  CA  ASP A 108       8.489 -19.175  26.967  1.00 14.02           C  
ATOM    802  C   ASP A 108       8.007 -18.619  28.318  1.00 16.56           C  
ATOM    803  O   ASP A 108       7.084 -19.135  28.971  1.00 19.46           O  
ATOM    804  CB  ASP A 108       7.652 -20.396  26.617  1.00 14.02           C  
ATOM    805  CG  ASP A 108       6.232 -20.071  26.186  1.00 20.04           C  
ATOM    806  OD1 ASP A 108       5.930 -18.919  25.882  1.00 22.75           O  
ATOM    807  OD2 ASP A 108       5.399 -20.983  26.091  1.00 21.20           O  
ATOM    808  N   GLU A 109       8.764 -17.583  28.705  1.00 18.15           N  
ATOM    809  CA  GLU A 109       8.495 -16.749  29.872  1.00 24.76           C  
ATOM    810  C   GLU A 109       8.816 -17.406  31.222  1.00 28.53           C  
ATOM    811  O   GLU A 109       8.360 -16.907  32.248  1.00 24.18           O  
ATOM    812  CB  GLU A 109       7.031 -16.306  29.903  1.00 23.74           C  
ATOM    813  CG  GLU A 109       6.609 -15.513  28.685  1.00 39.02           C  
ATOM    814  CD  GLU A 109       5.164 -15.091  28.776  1.00 35.83           C  
ATOM    815  OE1 GLU A 109       4.307 -15.965  28.666  1.00 42.26           O  
ATOM    816  OE2 GLU A 109       4.922 -13.901  28.984  1.00 50.54           O  
ATOM    817  N   ARG A 110       9.587 -18.495  31.296  1.00 23.57           N  
ATOM    818  CA  ARG A 110      10.058 -19.072  32.572  1.00 25.84           C  
ATOM    819  C   ARG A 110      10.919 -18.036  33.304  1.00 30.43           C  
ATOM    820  O   ARG A 110      10.672 -17.724  34.475  1.00 24.85           O  
ATOM    821  CB  ARG A 110      10.883 -20.353  32.319  1.00 21.39           C  
ATOM    822  CG  ARG A 110      11.404 -21.078  33.569  1.00 23.85           C  
ATOM    823  CD  ARG A 110      10.161 -21.588  34.342  1.00 24.89           C  
ATOM    824  NE  ARG A 110       9.647 -22.774  33.671  1.00 27.06           N  
ATOM    825  CZ  ARG A 110       8.375 -23.149  33.571  1.00 24.00           C  
ATOM    826  NH1 ARG A 110       7.435 -22.413  34.118  1.00 34.29           N  
ATOM    827  NH2 ARG A 110       8.022 -24.277  32.956  1.00 26.57           N  
ATOM    828  N   LEU A 111      11.915 -17.438  32.657  1.00 17.88           N  
ATOM    829  CA  LEU A 111      12.745 -16.429  33.264  1.00 18.66           C  
ATOM    830  C   LEU A 111      12.707 -15.080  32.576  1.00 19.35           C  
ATOM    831  O   LEU A 111      13.309 -14.108  33.051  1.00 18.67           O  
ATOM    832  CB  LEU A 111      14.157 -16.942  33.296  1.00 19.31           C  
ATOM    833  CG  LEU A 111      14.430 -18.083  34.253  1.00 24.75           C  
ATOM    834  CD1 LEU A 111      15.824 -18.593  34.125  1.00 28.02           C  
ATOM    835  CD2 LEU A 111      14.261 -17.553  35.646  1.00 33.78           C  
ATOM    836  N   THR A 112      12.007 -14.963  31.439  1.00 18.03           N  
ATOM    837  CA  THR A 112      11.980 -13.716  30.682  1.00 18.21           C  
ATOM    838  C   THR A 112      11.282 -12.671  31.542  1.00 16.40           C  
ATOM    839  O   THR A 112      10.238 -12.982  32.125  1.00 21.37           O  
ATOM    840  CB  THR A 112      11.196 -13.930  29.365  1.00 20.52           C  
ATOM    841  OG1 THR A 112      11.651 -15.180  28.849  1.00 21.48           O  
ATOM    842  CG2 THR A 112      11.362 -12.778  28.399  1.00 16.54           C  
ATOM    843  N   ALA A 113      11.761 -11.438  31.610  1.00 17.64           N  
ATOM    844  CA  ALA A 113      11.156 -10.417  32.442  1.00 22.16           C  
ATOM    845  C   ALA A 113      11.625  -9.054  31.967  1.00 23.20           C  
ATOM    846  O   ALA A 113      12.433  -8.975  31.031  1.00 21.50           O  
ATOM    847  CB  ALA A 113      11.606 -10.647  33.900  1.00 20.45           C  
ATOM    848  N   GLU A 114      11.168  -7.983  32.636  1.00 17.56           N  
ATOM    849  CA  GLU A 114      11.550  -6.643  32.300  1.00 17.62           C  
ATOM    850  C   GLU A 114      13.050  -6.545  32.268  1.00 20.21           C  
ATOM    851  O   GLU A 114      13.744  -7.079  33.127  1.00 19.38           O  
ATOM    852  CB  GLU A 114      10.943  -5.731  33.326  1.00 21.43           C  
ATOM    853  CG  GLU A 114      11.353  -4.286  33.067  1.00 31.92           C  
ATOM    854  CD  GLU A 114      10.679  -3.178  33.891  1.00 50.58           C  
ATOM    855  OE1 GLU A 114       9.970  -3.484  34.845  1.00 58.25           O  
ATOM    856  OE2 GLU A 114      10.863  -1.999  33.570  1.00 57.25           O  
ATOM    857  N   ASP A 115      13.595  -5.983  31.191  1.00 18.34           N  
ATOM    858  CA  ASP A 115      15.035  -5.858  30.963  1.00 18.30           C  
ATOM    859  C   ASP A 115      15.803  -7.156  30.977  1.00 14.16           C  
ATOM    860  O   ASP A 115      17.021  -7.232  31.237  1.00 18.02           O  
ATOM    861  CB  ASP A 115      15.700  -4.964  32.002  1.00 19.01           C  
ATOM    862  CG  ASP A 115      15.275  -3.526  32.012  1.00 25.40           C  
ATOM    863  OD1 ASP A 115      14.861  -3.002  30.973  1.00 28.95           O  
ATOM    864  OD2 ASP A 115      15.386  -2.918  33.069  1.00 32.28           O  
ATOM    865  N   ASN A 116      15.080  -8.231  30.694  1.00 16.08           N  
ATOM    866  CA  ASN A 116      15.715  -9.515  30.775  1.00 21.18           C  
ATOM    867  C   ASN A 116      15.183 -10.408  29.648  1.00 17.53           C  
ATOM    868  O   ASN A 116      14.329 -11.285  29.847  1.00 18.38           O  
ATOM    869  CB  ASN A 116      15.462 -10.131  32.189  1.00 13.57           C  
ATOM    870  CG  ASN A 116      16.452 -11.274  32.370  1.00 13.13           C  
ATOM    871  OD1 ASN A 116      17.716 -11.114  32.335  1.00 22.25           O  
ATOM    872  ND2 ASN A 116      15.861 -12.462  32.579  1.00 17.70           N  
ATOM    873  N   PRO A 117      15.676 -10.216  28.405  1.00 19.89           N  
ATOM    874  CA  PRO A 117      15.360 -11.102  27.297  1.00 22.27           C  
ATOM    875  C   PRO A 117      16.088 -12.442  27.412  1.00 18.54           C  
ATOM    876  O   PRO A 117      17.132 -12.521  28.078  1.00 18.89           O  
ATOM    877  CB  PRO A 117      15.760 -10.264  26.087  1.00 15.27           C  
ATOM    878  CG  PRO A 117      16.976  -9.504  26.572  1.00 17.83           C  
ATOM    879  CD  PRO A 117      16.553  -9.125  27.988  1.00 17.26           C  
ATOM    880  N   VAL A 118      15.596 -13.518  26.766  1.00 16.16           N  
ATOM    881  CA  VAL A 118      16.341 -14.777  26.664  1.00 16.43           C  
ATOM    882  C   VAL A 118      16.766 -14.959  25.175  1.00 25.34           C  
ATOM    883  O   VAL A 118      16.320 -14.206  24.289  1.00 19.32           O  
ATOM    884  CB  VAL A 118      15.473 -16.017  27.179  1.00 18.45           C  
ATOM    885  CG1 VAL A 118      15.247 -15.671  28.696  1.00 15.26           C  
ATOM    886  CG2 VAL A 118      14.085 -16.264  26.552  1.00 15.58           C  
ATOM    887  N   LEU A 119      17.618 -15.929  24.877  1.00 20.33           N  
ATOM    888  CA  LEU A 119      18.212 -16.171  23.561  1.00 20.99           C  
ATOM    889  C   LEU A 119      17.806 -17.484  22.914  1.00 20.18           C  
ATOM    890  O   LEU A 119      17.746 -18.515  23.600  1.00 19.36           O  
ATOM    891  CB  LEU A 119      19.702 -16.108  23.761  1.00 19.83           C  
ATOM    892  CG  LEU A 119      20.525 -16.192  22.531  1.00 29.38           C  
ATOM    893  CD1 LEU A 119      20.499 -14.841  21.877  1.00 33.62           C  
ATOM    894  CD2 LEU A 119      21.929 -16.539  22.872  1.00 28.54           C  
ATOM    895  N   LEU A 120      17.509 -17.596  21.616  1.00 16.23           N  
ATOM    896  CA  LEU A 120      17.189 -18.885  21.005  1.00 12.16           C  
ATOM    897  C   LEU A 120      17.994 -18.923  19.717  1.00 23.81           C  
ATOM    898  O   LEU A 120      17.999 -17.948  18.969  1.00 18.46           O  
ATOM    899  CB  LEU A 120      15.739 -19.008  20.630  1.00 14.54           C  
ATOM    900  CG  LEU A 120      15.309 -20.190  19.798  1.00 17.59           C  
ATOM    901  CD1 LEU A 120      15.600 -21.483  20.543  1.00 20.38           C  
ATOM    902  CD2 LEU A 120      13.811 -20.074  19.496  1.00 15.97           C  
ATOM    903  N   TYR A 121      18.739 -19.971  19.482  1.00 22.12           N  
ATOM    904  CA  TYR A 121      19.505 -20.129  18.261  1.00 23.52           C  
ATOM    905  C   TYR A 121      18.888 -21.304  17.518  1.00 22.86           C  
ATOM    906  O   TYR A 121      18.665 -22.334  18.165  1.00 23.27           O  
ATOM    907  CB  TYR A 121      20.961 -20.421  18.590  1.00 22.24           C  
ATOM    908  CG  TYR A 121      21.739 -20.937  17.382  1.00 25.99           C  
ATOM    909  CD1 TYR A 121      22.117 -20.087  16.352  1.00 34.91           C  
ATOM    910  CD2 TYR A 121      21.999 -22.288  17.324  1.00 26.29           C  
ATOM    911  CE1 TYR A 121      22.758 -20.613  15.256  1.00 27.38           C  
ATOM    912  CE2 TYR A 121      22.633 -22.826  16.234  1.00 35.27           C  
ATOM    913  CZ  TYR A 121      23.005 -21.983  15.214  1.00 36.17           C  
ATOM    914  OH  TYR A 121      23.631 -22.562  14.125  1.00 35.43           O  
ATOM    915  N   THR A 122      18.599 -21.227  16.193  1.00 22.81           N  
ATOM    916  CA  THR A 122      18.112 -22.375  15.451  1.00 19.32           C  
ATOM    917  C   THR A 122      18.914 -22.461  14.151  1.00 27.70           C  
ATOM    918  O   THR A 122      19.473 -21.465  13.656  1.00 21.98           O  
ATOM    919  CB  THR A 122      16.640 -22.248  15.110  1.00 21.37           C  
ATOM    920  OG1 THR A 122      16.478 -20.913  14.669  1.00 27.26           O  
ATOM    921  CG2 THR A 122      15.706 -22.489  16.285  1.00 29.49           C  
ATOM    922  N   TYR A 123      18.931 -23.678  13.643  1.00 26.58           N  
ATOM    923  CA  TYR A 123      19.626 -23.982  12.406  1.00 28.58           C  
ATOM    924  C   TYR A 123      19.029 -25.198  11.750  1.00 30.09           C  
ATOM    925  O   TYR A 123      18.779 -26.203  12.416  1.00 26.30           O  
ATOM    926  CB  TYR A 123      21.060 -24.251  12.713  1.00 29.46           C  
ATOM    927  CG  TYR A 123      21.859 -24.701  11.507  1.00 31.07           C  
ATOM    928  CD1 TYR A 123      22.355 -23.720  10.683  1.00 39.10           C  
ATOM    929  CD2 TYR A 123      22.061 -26.048  11.277  1.00 34.75           C  
ATOM    930  CE1 TYR A 123      23.083 -24.079   9.583  1.00 35.87           C  
ATOM    931  CE2 TYR A 123      22.787 -26.421  10.180  1.00 42.57           C  
ATOM    932  CZ  TYR A 123      23.284 -25.427   9.354  1.00 47.35           C  
ATOM    933  OH  TYR A 123      24.014 -25.777   8.240  1.00 53.04           O  
ATOM    934  N   SER A 124      18.827 -25.167  10.444  1.00 29.07           N  
ATOM    935  CA  SER A 124      18.380 -26.360   9.780  1.00 25.74           C  
ATOM    936  C   SER A 124      19.212 -26.528   8.512  1.00 32.52           C  
ATOM    937  O   SER A 124      19.737 -25.560   7.954  1.00 28.10           O  
ATOM    938  CB  SER A 124      16.959 -26.266   9.361  1.00 29.36           C  
ATOM    939  OG  SER A 124      16.102 -26.031  10.448  1.00 40.97           O  
ATOM    940  N   ALA A 125      19.358 -27.755   8.074  1.00 38.12           N  
ATOM    941  CA  ALA A 125      20.047 -28.066   6.845  1.00 28.40           C  
ATOM    942  C   ALA A 125      19.350 -29.333   6.392  1.00 30.58           C  
ATOM    943  O   ALA A 125      19.430 -30.369   7.065  1.00 39.26           O  
ATOM    944  CB  ALA A 125      21.487 -28.341   7.146  1.00 24.99           C  
ATOM    945  N   GLY A 126      18.578 -29.298   5.319  1.00 37.02           N  
ATOM    946  CA  GLY A 126      17.941 -30.499   4.836  1.00 31.57           C  
ATOM    947  C   GLY A 126      16.898 -31.059   5.780  1.00 47.32           C  
ATOM    948  O   GLY A 126      15.877 -30.451   6.108  1.00 45.65           O  
ATOM    949  N   ALA A 127      17.180 -32.278   6.195  1.00 33.24           N  
ATOM    950  CA  ALA A 127      16.275 -33.037   7.039  1.00 42.64           C  
ATOM    951  C   ALA A 127      16.458 -32.822   8.549  1.00 33.08           C  
ATOM    952  O   ALA A 127      15.702 -33.301   9.402  1.00 40.51           O  
ATOM    953  CB  ALA A 127      16.490 -34.498   6.705  1.00 35.42           C  
ATOM    954  N   PHE A 128      17.468 -32.083   8.902  1.00 27.81           N  
ATOM    955  CA  PHE A 128      17.848 -32.020  10.258  1.00 28.97           C  
ATOM    956  C   PHE A 128      17.701 -30.613  10.786  1.00 40.19           C  
ATOM    957  O   PHE A 128      17.975 -29.634  10.085  1.00 29.96           O  
ATOM    958  CB  PHE A 128      19.218 -32.562  10.176  1.00 27.26           C  
ATOM    959  CG  PHE A 128      20.062 -32.313  11.399  1.00 62.21           C  
ATOM    960  CD1 PHE A 128      19.988 -33.205  12.457  1.00 68.83           C  
ATOM    961  CD2 PHE A 128      20.908 -31.200  11.430  1.00 68.66           C  
ATOM    962  CE1 PHE A 128      20.783 -32.970  13.564  1.00 68.63           C  
ATOM    963  CE2 PHE A 128      21.699 -30.972  12.540  1.00 72.56           C  
ATOM    964  CZ  PHE A 128      21.630 -31.866  13.601  1.00 71.50           C  
ATOM    965  N   SER A 129      17.331 -30.540  12.060  1.00 32.05           N  
ATOM    966  CA  SER A 129      17.219 -29.262  12.751  1.00 30.97           C  
ATOM    967  C   SER A 129      17.830 -29.309  14.144  1.00 26.59           C  
ATOM    968  O   SER A 129      17.736 -30.344  14.808  1.00 27.36           O  
ATOM    969  CB  SER A 129      15.772 -28.871  12.897  1.00 27.55           C  
ATOM    970  OG  SER A 129      15.072 -28.729  11.673  1.00 47.00           O  
ATOM    971  N   VAL A 130      18.521 -28.261  14.560  1.00 28.17           N  
ATOM    972  CA  VAL A 130      19.019 -28.143  15.916  1.00 29.20           C  
ATOM    973  C   VAL A 130      18.641 -26.796  16.512  1.00 40.17           C  
ATOM    974  O   VAL A 130      18.516 -25.799  15.787  1.00 25.40           O  
ATOM    975  CB  VAL A 130      20.511 -28.239  16.012  1.00 24.69           C  
ATOM    976  CG1 VAL A 130      20.801 -29.679  15.851  1.00 34.50           C  
ATOM    977  CG2 VAL A 130      21.225 -27.340  15.037  1.00 27.14           C  
ATOM    978  N   ALA A 131      18.434 -26.730  17.829  1.00 24.58           N  
ATOM    979  CA  ALA A 131      18.111 -25.468  18.511  1.00 21.75           C  
ATOM    980  C   ALA A 131      18.877 -25.407  19.842  1.00 27.70           C  
ATOM    981  O   ALA A 131      19.246 -26.460  20.409  1.00 27.02           O  
ATOM    982  CB  ALA A 131      16.591 -25.405  18.742  1.00 16.82           C  
ATOM    983  N   ALA A 132      19.238 -24.228  20.323  1.00 24.98           N  
ATOM    984  CA  ALA A 132      19.932 -24.098  21.596  1.00 25.03           C  
ATOM    985  C   ALA A 132      19.448 -22.801  22.221  1.00 34.14           C  
ATOM    986  O   ALA A 132      19.250 -21.814  21.513  1.00 20.34           O  
ATOM    987  CB  ALA A 132      21.444 -24.029  21.375  1.00 23.74           C  
ATOM    988  N   SER A 133      19.188 -22.737  23.518  1.00 21.23           N  
ATOM    989  CA  SER A 133      18.664 -21.524  24.131  1.00 18.46           C  
ATOM    990  C   SER A 133      19.284 -21.285  25.516  1.00 24.03           C  
ATOM    991  O   SER A 133      19.802 -22.239  26.115  1.00 22.23           O  
ATOM    992  CB  SER A 133      17.176 -21.672  24.250  1.00 14.79           C  
ATOM    993  OG  SER A 133      16.814 -22.952  24.768  1.00 19.72           O  
ATOM    994  N   MET A 134      19.303 -20.077  26.055  1.00 22.25           N  
ATOM    995  CA  MET A 134      19.802 -19.845  27.405  1.00 21.58           C  
ATOM    996  C   MET A 134      19.357 -18.485  27.899  1.00 33.98           C  
ATOM    997  O   MET A 134      18.998 -17.634  27.066  1.00 19.01           O  
ATOM    998  CB  MET A 134      21.317 -19.910  27.405  1.00 18.41           C  
ATOM    999  CG  MET A 134      21.955 -18.746  26.654  1.00 25.36           C  
ATOM   1000  SD  MET A 134      23.758 -18.772  26.669  1.00 35.96           S  
ATOM   1001  CE  MET A 134      24.092 -18.494  28.385  1.00 37.35           C  
ATOM   1002  N   SER A 135      19.314 -18.261  29.212  1.00 18.02           N  
ATOM   1003  CA  SER A 135      19.041 -16.944  29.746  1.00 16.76           C  
ATOM   1004  C   SER A 135      20.400 -16.477  30.208  1.00 16.94           C  
ATOM   1005  O   SER A 135      21.361 -17.253  30.182  1.00 20.09           O  
ATOM   1006  CB  SER A 135      18.034 -17.017  30.907  1.00 20.02           C  
ATOM   1007  OG  SER A 135      18.468 -17.881  31.957  1.00 20.86           O  
ATOM   1008  N   ASP A 136      20.575 -15.243  30.638  1.00 16.31           N  
ATOM   1009  CA  ASP A 136      21.896 -14.789  30.953  1.00 16.45           C  
ATOM   1010  C   ASP A 136      22.306 -14.956  32.433  1.00 22.62           C  
ATOM   1011  O   ASP A 136      23.431 -14.549  32.746  1.00 22.11           O  
ATOM   1012  CB  ASP A 136      22.008 -13.322  30.545  1.00 18.28           C  
ATOM   1013  CG  ASP A 136      21.118 -12.306  31.234  1.00 26.65           C  
ATOM   1014  OD1 ASP A 136      20.599 -12.470  32.340  1.00 23.99           O  
ATOM   1015  OD2 ASP A 136      20.891 -11.237  30.680  1.00 20.64           O  
ATOM   1016  N   GLY A 137      21.469 -15.440  33.377  1.00 24.48           N  
ATOM   1017  CA  GLY A 137      21.879 -15.654  34.775  1.00 23.91           C  
ATOM   1018  C   GLY A 137      21.825 -14.434  35.682  1.00 26.85           C  
ATOM   1019  O   GLY A 137      22.169 -14.569  36.854  1.00 25.96           O  
ATOM   1020  N   LYS A 138      21.421 -13.236  35.265  1.00 17.66           N  
ATOM   1021  CA  LYS A 138      21.367 -12.055  36.104  1.00 18.17           C  
ATOM   1022  C   LYS A 138      20.022 -11.408  35.986  1.00 30.18           C  
ATOM   1023  O   LYS A 138      19.466 -11.268  34.880  1.00 21.24           O  
ATOM   1024  CB  LYS A 138      22.372 -10.986  35.727  1.00 16.38           C  
ATOM   1025  CG  LYS A 138      23.792 -11.496  35.715  1.00 23.82           C  
ATOM   1026  CD  LYS A 138      24.140 -11.859  37.123  1.00 27.64           C  
ATOM   1027  CE  LYS A 138      25.533 -12.379  37.245  1.00 44.82           C  
ATOM   1028  NZ  LYS A 138      26.012 -11.923  38.538  1.00 46.52           N  
ATOM   1029  N   VAL A 139      19.474 -10.987  37.108  1.00 18.51           N  
ATOM   1030  CA  VAL A 139      18.174 -10.375  37.172  1.00 17.22           C  
ATOM   1031  C   VAL A 139      18.172  -9.096  36.379  1.00 17.48           C  
ATOM   1032  O   VAL A 139      19.123  -8.335  36.540  1.00 19.74           O  
ATOM   1033  CB  VAL A 139      17.788 -10.042  38.624  1.00 22.74           C  
ATOM   1034  CG1 VAL A 139      16.425  -9.380  38.662  1.00 20.52           C  
ATOM   1035  CG2 VAL A 139      17.643 -11.326  39.407  1.00 19.66           C  
ATOM   1036  N   GLY A 140      17.163  -8.830  35.530  1.00 20.23           N  
ATOM   1037  CA  GLY A 140      17.145  -7.617  34.718  1.00 18.19           C  
ATOM   1038  C   GLY A 140      18.483  -7.470  33.993  1.00 15.63           C  
ATOM   1039  O   GLY A 140      19.102  -8.463  33.521  1.00 24.74           O  
ATOM   1040  N   GLU A 141      18.944  -6.222  34.012  1.00 20.17           N  
ATOM   1041  CA  GLU A 141      20.259  -5.874  33.503  1.00 22.48           C  
ATOM   1042  C   GLU A 141      21.126  -5.535  34.696  1.00 27.63           C  
ATOM   1043  O   GLU A 141      22.035  -4.706  34.600  1.00 24.54           O  
ATOM   1044  CB  GLU A 141      20.171  -4.664  32.566  1.00 23.70           C  
ATOM   1045  CG  GLU A 141      19.722  -5.124  31.158  1.00 28.35           C  
ATOM   1046  CD  GLU A 141      19.280  -4.042  30.161  1.00 35.14           C  
ATOM   1047  OE1 GLU A 141      19.521  -2.849  30.346  1.00 29.71           O  
ATOM   1048  OE2 GLU A 141      18.647  -4.398  29.172  1.00 26.87           O  
ATOM   1049  N   THR A 142      20.874  -6.205  35.825  1.00 24.87           N  
ATOM   1050  CA  THR A 142      21.602  -5.920  37.045  1.00 26.14           C  
ATOM   1051  C   THR A 142      22.691  -6.951  37.228  1.00 26.00           C  
ATOM   1052  O   THR A 142      22.900  -7.827  36.391  1.00 26.49           O  
ATOM   1053  CB  THR A 142      20.652  -5.937  38.303  1.00 22.12           C  
ATOM   1054  OG1 THR A 142      20.367  -7.309  38.664  1.00 23.47           O  
ATOM   1055  CG2 THR A 142      19.428  -5.058  38.051  1.00 22.33           C  
ATOM   1056  N   SER A 143      23.421  -6.876  38.341  1.00 25.41           N  
ATOM   1057  CA  SER A 143      24.368  -7.911  38.667  1.00 24.21           C  
ATOM   1058  C   SER A 143      23.801  -8.929  39.653  1.00 29.13           C  
ATOM   1059  O   SER A 143      24.544  -9.831  40.060  1.00 29.64           O  
ATOM   1060  CB  SER A 143      25.611  -7.272  39.238  1.00 30.36           C  
ATOM   1061  OG  SER A 143      26.293  -6.538  38.236  1.00 34.01           O  
ATOM   1062  N   GLU A 144      22.512  -8.883  40.023  1.00 25.37           N  
ATOM   1063  CA  GLU A 144      21.989  -9.861  40.964  1.00 23.57           C  
ATOM   1064  C   GLU A 144      21.841 -11.232  40.318  1.00 32.22           C  
ATOM   1065  O   GLU A 144      21.251 -11.321  39.236  1.00 26.96           O  
ATOM   1066  CB  GLU A 144      20.651  -9.323  41.474  1.00 30.98           C  
ATOM   1067  CG  GLU A 144      20.131 -10.086  42.704  1.00 55.43           C  
ATOM   1068  CD  GLU A 144      18.655  -9.917  43.094  1.00 68.87           C  
ATOM   1069  OE1 GLU A 144      18.059  -8.877  42.796  1.00 57.51           O  
ATOM   1070  OE2 GLU A 144      18.102 -10.844  43.704  1.00 82.75           O  
ATOM   1071  N   ASP A 145      22.347 -12.300  40.937  1.00 24.45           N  
ATOM   1072  CA  ASP A 145      22.274 -13.644  40.397  1.00 23.62           C  
ATOM   1073  C   ASP A 145      20.885 -14.160  40.292  1.00 31.40           C  
ATOM   1074  O   ASP A 145      20.085 -13.976  41.211  1.00 27.58           O  
ATOM   1075  CB  ASP A 145      23.020 -14.680  41.223  1.00 27.22           C  
ATOM   1076  CG  ASP A 145      24.550 -14.597  41.158  1.00 43.72           C  
ATOM   1077  OD1 ASP A 145      25.098 -14.301  40.098  1.00 55.35           O  
ATOM   1078  OD2 ASP A 145      25.207 -14.860  42.168  1.00 70.49           O  
ATOM   1079  N   ASP A 146      20.597 -14.825  39.175  1.00 23.66           N  
ATOM   1080  CA  ASP A 146      19.260 -15.333  38.926  1.00 18.81           C  
ATOM   1081  C   ASP A 146      19.452 -16.804  38.675  1.00 10.77           C  
ATOM   1082  O   ASP A 146      20.572 -17.306  38.563  1.00 22.23           O  
ATOM   1083  CB  ASP A 146      18.641 -14.610  37.668  1.00 21.54           C  
ATOM   1084  CG  ASP A 146      17.119 -14.645  37.537  1.00 31.62           C  
ATOM   1085  OD1 ASP A 146      16.459 -15.328  38.315  1.00 34.30           O  
ATOM   1086  OD2 ASP A 146      16.552 -13.985  36.671  1.00 26.76           O  
ATOM   1087  N   ALA A 147      18.352 -17.567  38.662  1.00 16.46           N  
ATOM   1088  CA  ALA A 147      18.384 -18.938  38.146  1.00 23.36           C  
ATOM   1089  C   ALA A 147      18.787 -18.819  36.658  1.00 25.54           C  
ATOM   1090  O   ALA A 147      18.528 -17.764  36.053  1.00 21.29           O  
ATOM   1091  CB  ALA A 147      17.004 -19.572  38.198  1.00 18.36           C  
ATOM   1092  N   GLN A 148      19.417 -19.794  36.046  1.00 20.67           N  
ATOM   1093  CA  GLN A 148      19.780 -19.644  34.654  1.00 21.13           C  
ATOM   1094  C   GLN A 148      19.249 -20.829  33.907  1.00 28.17           C  
ATOM   1095  O   GLN A 148      19.476 -21.942  34.380  1.00 24.20           O  
ATOM   1096  CB  GLN A 148      21.233 -19.585  34.578  1.00 21.13           C  
ATOM   1097  CG  GLN A 148      21.619 -19.436  33.129  1.00 25.80           C  
ATOM   1098  CD  GLN A 148      23.080 -19.135  32.982  1.00 34.87           C  
ATOM   1099  OE1 GLN A 148      23.490 -18.474  32.035  1.00 38.87           O  
ATOM   1100  NE2 GLN A 148      23.954 -19.503  33.912  1.00 47.02           N  
ATOM   1101  N   GLU A 149      18.555 -20.666  32.777  1.00 17.81           N  
ATOM   1102  CA  GLU A 149      18.010 -21.814  32.074  1.00 17.51           C  
ATOM   1103  C   GLU A 149      18.825 -22.040  30.814  1.00 20.63           C  
ATOM   1104  O   GLU A 149      19.517 -21.103  30.376  1.00 18.55           O  
ATOM   1105  CB  GLU A 149      16.573 -21.597  31.681  1.00 19.12           C  
ATOM   1106  CG  GLU A 149      16.351 -20.335  30.838  1.00 18.36           C  
ATOM   1107  CD  GLU A 149      14.915 -19.997  30.523  1.00 20.39           C  
ATOM   1108  OE1 GLU A 149      14.001 -20.666  31.017  1.00 21.55           O  
ATOM   1109  OE2 GLU A 149      14.713 -19.031  29.780  1.00 21.49           O  
ATOM   1110  N   MET A 150      18.765 -23.266  30.310  1.00 18.17           N  
ATOM   1111  CA  MET A 150      19.475 -23.652  29.080  1.00 20.14           C  
ATOM   1112  C   MET A 150      18.815 -24.867  28.505  1.00 28.58           C  
ATOM   1113  O   MET A 150      18.294 -25.697  29.249  1.00 27.20           O  
ATOM   1114  CB  MET A 150      20.897 -24.106  29.266  1.00 27.78           C  
ATOM   1115  CG  MET A 150      21.860 -23.060  29.696  1.00 64.16           C  
ATOM   1116  SD  MET A 150      23.096 -23.853  30.745  1.00 78.93           S  
ATOM   1117  CE  MET A 150      24.207 -22.466  30.751  1.00 70.32           C  
ATOM   1118  N   ALA A 151      18.839 -25.057  27.189  1.00 21.76           N  
ATOM   1119  CA  ALA A 151      18.277 -26.257  26.591  1.00 22.34           C  
ATOM   1120  C   ALA A 151      18.943 -26.437  25.223  1.00 22.98           C  
ATOM   1121  O   ALA A 151      19.548 -25.489  24.661  1.00 20.23           O  
ATOM   1122  CB  ALA A 151      16.789 -26.128  26.374  1.00 15.31           C  
ATOM   1123  N   VAL A 152      18.928 -27.676  24.774  1.00 21.53           N  
ATOM   1124  CA  VAL A 152      19.474 -28.033  23.471  1.00 23.07           C  
ATOM   1125  C   VAL A 152      18.471 -29.062  22.924  1.00 29.71           C  
ATOM   1126  O   VAL A 152      17.850 -29.818  23.689  1.00 27.21           O  
ATOM   1127  CB  VAL A 152      20.971 -28.628  23.592  1.00 25.13           C  
ATOM   1128  CG1AVAL A 152      21.917 -27.575  24.154  0.53 28.48           C  
ATOM   1129  CG1BVAL A 152      21.452 -29.025  22.205  0.26 24.20           C  
ATOM   1130  CG1CVAL A 152      21.013 -29.912  24.410  0.21 26.31           C  
ATOM   1131  CG2AVAL A 152      20.993 -29.863  24.477  0.53 23.43           C  
ATOM   1132  CG2BVAL A 152      21.950 -27.615  24.169  0.26 29.11           C  
ATOM   1133  CG2CVAL A 152      21.509 -28.858  22.190  0.21 24.18           C  
ATOM   1134  N   ALA A 153      18.188 -29.091  21.614  1.00 27.54           N  
ATOM   1135  CA  ALA A 153      17.282 -30.081  21.038  1.00 23.02           C  
ATOM   1136  C   ALA A 153      17.694 -30.354  19.578  1.00 25.00           C  
ATOM   1137  O   ALA A 153      18.306 -29.478  18.939  1.00 23.08           O  
ATOM   1138  CB  ALA A 153      15.849 -29.557  21.074  1.00 20.58           C  
ATOM   1139  N   ALA A 154      17.409 -31.528  19.045  1.00 25.22           N  
ATOM   1140  CA  ALA A 154      17.720 -31.854  17.658  1.00 31.60           C  
ATOM   1141  C   ALA A 154      16.571 -32.634  17.111  1.00 28.50           C  
ATOM   1142  O   ALA A 154      15.874 -33.314  17.860  1.00 28.42           O  
ATOM   1143  CB  ALA A 154      18.932 -32.711  17.543  1.00 24.29           C  
ATOM   1144  N   ALA A 155      16.262 -32.535  15.825  1.00 26.24           N  
ATOM   1145  CA  ALA A 155      15.174 -33.295  15.245  1.00 31.59           C  
ATOM   1146  C   ALA A 155      15.619 -33.740  13.846  1.00 32.78           C  
ATOM   1147  O   ALA A 155      16.532 -33.181  13.226  1.00 27.08           O  
ATOM   1148  CB  ALA A 155      13.908 -32.446  15.078  1.00 29.48           C  
ATOM   1149  N   TYR A 156      14.961 -34.772  13.379  1.00 27.28           N  
ATOM   1150  CA  TYR A 156      15.207 -35.330  12.082  1.00 27.65           C  
ATOM   1151  C   TYR A 156      13.878 -35.745  11.455  1.00 25.30           C  
ATOM   1152  O   TYR A 156      13.049 -36.464  12.029  1.00 31.37           O  
ATOM   1153  CB  TYR A 156      16.168 -36.499  12.279  1.00 40.64           C  
ATOM   1154  CG  TYR A 156      16.505 -37.195  10.962  1.00 72.25           C  
ATOM   1155  CD1 TYR A 156      17.270 -36.535  10.007  1.00 68.07           C  
ATOM   1156  CD2 TYR A 156      15.995 -38.472  10.714  1.00 78.75           C  
ATOM   1157  CE1 TYR A 156      17.511 -37.161   8.799  1.00 70.03           C  
ATOM   1158  CE2 TYR A 156      16.239 -39.101   9.507  1.00 76.52           C  
ATOM   1159  CZ  TYR A 156      16.995 -38.430   8.559  1.00 81.42           C  
ATOM   1160  OH  TYR A 156      17.234 -39.034   7.335  1.00 98.25           O  
ATOM   1161  N   THR A 157      13.640 -35.245  10.249  1.00 33.54           N  
ATOM   1162  CA  THR A 157      12.446 -35.609   9.529  1.00 41.02           C  
ATOM   1163  C   THR A 157      12.781 -36.673   8.478  1.00 45.31           C  
ATOM   1164  O   THR A 157      13.782 -36.556   7.773  1.00 47.36           O  
ATOM   1165  CB  THR A 157      11.885 -34.354   8.890  1.00 31.49           C  
ATOM   1166  OG1 THR A 157      11.816 -33.382   9.932  1.00 47.00           O  
ATOM   1167  CG2 THR A 157      10.503 -34.583   8.279  1.00 34.86           C  
ATOM   1168  N   PHE A 158      12.016 -37.750   8.382  1.00 40.52           N  
ATOM   1169  CA  PHE A 158      12.155 -38.795   7.393  1.00 46.68           C  
ATOM   1170  C   PHE A 158      10.739 -39.174   7.005  1.00 44.70           C  
ATOM   1171  O   PHE A 158       9.926 -39.803   7.693  1.00 50.08           O  
ATOM   1172  CB  PHE A 158      12.915 -40.006   7.961  1.00 40.11           C  
ATOM   1173  CG  PHE A 158      12.415 -40.654   9.250  1.00 60.39           C  
ATOM   1174  CD1 PHE A 158      12.675 -40.063  10.478  1.00 73.87           C  
ATOM   1175  CD2 PHE A 158      11.701 -41.847   9.191  1.00 75.24           C  
ATOM   1176  CE1 PHE A 158      12.219 -40.663  11.632  1.00 73.60           C  
ATOM   1177  CE2 PHE A 158      11.249 -42.442  10.357  1.00 79.76           C  
ATOM   1178  CZ  PHE A 158      11.509 -41.848  11.575  1.00 79.46           C  
ATOM   1179  N   GLY A 159      10.399 -38.592   5.878  1.00 54.47           N  
ATOM   1180  CA  GLY A 159       9.112 -38.851   5.291  1.00 53.05           C  
ATOM   1181  C   GLY A 159       8.071 -38.135   6.113  1.00 50.28           C  
ATOM   1182  O   GLY A 159       8.189 -36.924   6.359  1.00 60.39           O  
ATOM   1183  N   ASN A 160       7.122 -38.958   6.579  1.00 40.08           N  
ATOM   1184  CA  ASN A 160       5.983 -38.481   7.367  1.00 58.74           C  
ATOM   1185  C   ASN A 160       6.321 -38.149   8.812  1.00 49.02           C  
ATOM   1186  O   ASN A 160       5.490 -37.547   9.498  1.00 47.25           O  
ATOM   1187  CB  ASN A 160       4.845 -39.503   7.494  1.00 63.82           C  
ATOM   1188  CG  ASN A 160       4.460 -40.322   6.266  1.00 89.40           C  
ATOM   1189  OD1 ASN A 160       5.283 -41.093   5.758  1.00107.52           O  
ATOM   1190  ND2 ASN A 160       3.234 -40.234   5.751  1.00 92.23           N  
ATOM   1191  N   TYR A 161       7.518 -38.572   9.221  1.00 38.38           N  
ATOM   1192  CA  TYR A 161       7.993 -38.571  10.582  1.00 39.40           C  
ATOM   1193  C   TYR A 161       9.020 -37.553  10.920  1.00 45.36           C  
ATOM   1194  O   TYR A 161       9.923 -37.343  10.126  1.00 41.06           O  
ATOM   1195  CB  TYR A 161       8.619 -39.886  10.939  1.00 34.37           C  
ATOM   1196  CG  TYR A 161       7.655 -40.974  10.566  1.00 57.59           C  
ATOM   1197  CD1 TYR A 161       6.653 -41.311  11.450  1.00 69.71           C  
ATOM   1198  CD2 TYR A 161       7.725 -41.562   9.317  1.00 70.14           C  
ATOM   1199  CE1 TYR A 161       5.689 -42.237  11.087  1.00 73.90           C  
ATOM   1200  CE2 TYR A 161       6.765 -42.487   8.947  1.00 73.04           C  
ATOM   1201  CZ  TYR A 161       5.750 -42.816   9.836  1.00 78.64           C  
ATOM   1202  OH  TYR A 161       4.758 -43.712   9.471  1.00 85.47           O  
ATOM   1203  N   THR A 162       8.891 -36.915  12.069  1.00 30.45           N  
ATOM   1204  CA  THR A 162       9.994 -36.168  12.600  1.00 27.25           C  
ATOM   1205  C   THR A 162      10.140 -36.784  13.950  1.00 35.32           C  
ATOM   1206  O   THR A 162       9.140 -37.069  14.615  1.00 33.92           O  
ATOM   1207  CB  THR A 162       9.703 -34.725  12.782  1.00 31.07           C  
ATOM   1208  OG1 THR A 162       9.394 -34.238  11.483  1.00 39.71           O  
ATOM   1209  CG2 THR A 162      10.889 -33.987  13.414  1.00 29.14           C  
ATOM   1210  N   VAL A 163      11.356 -37.105  14.293  1.00 27.12           N  
ATOM   1211  CA  VAL A 163      11.576 -37.553  15.642  1.00 37.49           C  
ATOM   1212  C   VAL A 163      12.619 -36.613  16.222  1.00 30.21           C  
ATOM   1213  O   VAL A 163      13.349 -35.952  15.479  1.00 33.78           O  
ATOM   1214  CB  VAL A 163      12.069 -39.057  15.742  1.00 34.36           C  
ATOM   1215  CG1 VAL A 163      10.966 -39.939  15.165  1.00 32.38           C  
ATOM   1216  CG2 VAL A 163      13.420 -39.271  15.075  1.00 43.54           C  
ATOM   1217  N   GLY A 164      12.688 -36.440  17.536  1.00 28.78           N  
ATOM   1218  CA  GLY A 164      13.703 -35.572  18.098  1.00 30.23           C  
ATOM   1219  C   GLY A 164      13.877 -35.769  19.601  1.00 28.31           C  
ATOM   1220  O   GLY A 164      13.120 -36.518  20.239  1.00 28.35           O  
ATOM   1221  N   LEU A 165      14.870 -35.075  20.147  1.00 24.05           N  
ATOM   1222  CA  LEU A 165      15.090 -35.081  21.571  1.00 31.20           C  
ATOM   1223  C   LEU A 165      15.630 -33.765  22.024  1.00 23.08           C  
ATOM   1224  O   LEU A 165      16.230 -33.001  21.279  1.00 27.04           O  
ATOM   1225  CB  LEU A 165      16.049 -36.185  21.995  1.00 40.23           C  
ATOM   1226  CG  LEU A 165      17.491 -36.359  21.615  1.00 55.61           C  
ATOM   1227  CD1 LEU A 165      18.360 -36.288  22.871  1.00 64.27           C  
ATOM   1228  CD2 LEU A 165      17.674 -37.743  20.975  1.00 58.44           C  
ATOM   1229  N   GLY A 166      15.339 -33.481  23.275  1.00 28.71           N  
ATOM   1230  CA  GLY A 166      15.723 -32.228  23.857  1.00 24.37           C  
ATOM   1231  C   GLY A 166      16.128 -32.454  25.298  1.00 22.71           C  
ATOM   1232  O   GLY A 166      15.752 -33.451  25.916  1.00 23.22           O  
ATOM   1233  N   TYR A 167      16.924 -31.547  25.782  1.00 22.54           N  
ATOM   1234  CA  TYR A 167      17.385 -31.601  27.114  1.00 21.68           C  
ATOM   1235  C   TYR A 167      17.386 -30.166  27.552  1.00 22.97           C  
ATOM   1236  O   TYR A 167      18.019 -29.272  26.994  1.00 25.70           O  
ATOM   1237  CB  TYR A 167      18.742 -32.178  27.097  1.00 19.60           C  
ATOM   1238  CG  TYR A 167      19.294 -32.136  28.482  1.00 30.51           C  
ATOM   1239  CD1 TYR A 167      18.831 -33.005  29.458  1.00 31.48           C  
ATOM   1240  CD2 TYR A 167      20.232 -31.163  28.747  1.00 35.86           C  
ATOM   1241  CE1 TYR A 167      19.337 -32.873  30.737  1.00 34.71           C  
ATOM   1242  CE2 TYR A 167      20.735 -31.024  30.022  1.00 45.09           C  
ATOM   1243  CZ  TYR A 167      20.279 -31.881  31.001  1.00 45.63           C  
ATOM   1244  OH  TYR A 167      20.781 -31.711  32.274  1.00 43.91           O  
ATOM   1245  N   GLU A 168      16.761 -30.020  28.698  1.00 25.32           N  
ATOM   1246  CA  GLU A 168      16.579 -28.730  29.323  1.00 22.85           C  
ATOM   1247  C   GLU A 168      17.031 -28.704  30.781  1.00 23.46           C  
ATOM   1248  O   GLU A 168      16.833 -29.685  31.510  1.00 21.97           O  
ATOM   1249  CB  GLU A 168      15.129 -28.374  29.303  1.00 23.96           C  
ATOM   1250  CG  GLU A 168      14.336 -28.524  28.005  1.00 18.08           C  
ATOM   1251  CD  GLU A 168      12.978 -27.879  28.137  1.00 17.37           C  
ATOM   1252  OE1 GLU A 168      12.883 -26.660  28.050  1.00 19.97           O  
ATOM   1253  OE2 GLU A 168      11.995 -28.566  28.325  1.00 21.50           O  
ATOM   1254  N   LYS A 169      17.600 -27.609  31.238  1.00 21.91           N  
ATOM   1255  CA  LYS A 169      17.934 -27.489  32.645  1.00 26.98           C  
ATOM   1256  C   LYS A 169      17.850 -26.074  33.211  1.00 33.90           C  
ATOM   1257  O   LYS A 169      17.944 -25.073  32.479  1.00 21.78           O  
ATOM   1258  CB  LYS A 169      19.311 -28.049  32.861  1.00 22.39           C  
ATOM   1259  CG  LYS A 169      20.349 -27.286  32.129  1.00 33.73           C  
ATOM   1260  CD  LYS A 169      21.591 -27.849  32.707  1.00 55.00           C  
ATOM   1261  CE  LYS A 169      22.497 -26.654  32.902  1.00 70.05           C  
ATOM   1262  NZ  LYS A 169      23.579 -27.016  33.806  1.00 76.45           N  
ATOM   1263  N   ILE A 170      17.570 -25.964  34.531  1.00 24.31           N  
ATOM   1264  CA  ILE A 170      17.564 -24.681  35.251  1.00 26.64           C  
ATOM   1265  C   ILE A 170      18.554 -24.824  36.423  1.00 22.64           C  
ATOM   1266  O   ILE A 170      18.462 -25.750  37.218  1.00 26.39           O  
ATOM   1267  CB  ILE A 170      16.144 -24.293  35.810  1.00 22.23           C  
ATOM   1268  CG1 ILE A 170      15.068 -24.222  34.712  1.00 18.13           C  
ATOM   1269  CG2 ILE A 170      16.296 -22.936  36.512  1.00 20.59           C  
ATOM   1270  CD1 ILE A 170      13.666 -23.890  35.214  1.00 22.57           C  
ATOM   1271  N   ASP A 171      19.579 -24.004  36.473  1.00 21.42           N  
ATOM   1272  CA  ASP A 171      20.512 -23.901  37.562  1.00 22.65           C  
ATOM   1273  C   ASP A 171      20.069 -22.845  38.533  1.00 24.81           C  
ATOM   1274  O   ASP A 171      19.879 -21.676  38.196  1.00 25.52           O  
ATOM   1275  CB  ASP A 171      21.876 -23.496  37.110  1.00 24.09           C  
ATOM   1276  CG  ASP A 171      22.500 -24.534  36.202  1.00 37.12           C  
ATOM   1277  OD1 ASP A 171      22.150 -25.716  36.302  1.00 39.08           O  
ATOM   1278  OD2 ASP A 171      23.325 -24.134  35.385  1.00 63.64           O  
ATOM   1279  N   SER A 172      19.937 -23.309  39.769  1.00 28.50           N  
ATOM   1280  CA  SER A 172      19.500 -22.508  40.890  1.00 29.34           C  
ATOM   1281  C   SER A 172      20.603 -21.582  41.329  1.00 19.80           C  
ATOM   1282  O   SER A 172      21.745 -22.025  41.398  1.00 27.09           O  
ATOM   1283  CB  SER A 172      19.152 -23.383  42.069  1.00 25.55           C  
ATOM   1284  OG  SER A 172      18.727 -22.499  43.089  1.00 28.00           O  
ATOM   1285  N   PRO A 173      20.365 -20.329  41.698  1.00 23.04           N  
ATOM   1286  CA  PRO A 173      21.386 -19.495  42.291  1.00 24.44           C  
ATOM   1287  C   PRO A 173      21.652 -19.986  43.713  1.00 46.59           C  
ATOM   1288  O   PRO A 173      22.743 -19.708  44.184  1.00 45.87           O  
ATOM   1289  CB  PRO A 173      20.825 -18.111  42.244  1.00 21.93           C  
ATOM   1290  CG  PRO A 173      19.367 -18.345  42.486  1.00 24.05           C  
ATOM   1291  CD  PRO A 173      19.060 -19.699  41.802  1.00 23.65           C  
ATOM   1292  N   ASP A 174      20.755 -20.703  44.425  1.00 32.74           N  
ATOM   1293  CA  ASP A 174      21.015 -21.137  45.794  1.00 29.56           C  
ATOM   1294  C   ASP A 174      20.241 -22.413  46.005  1.00 19.81           C  
ATOM   1295  O   ASP A 174      19.009 -22.376  46.189  1.00 27.36           O  
ATOM   1296  CB  ASP A 174      20.540 -20.070  46.777  1.00 37.96           C  
ATOM   1297  CG  ASP A 174      20.907 -20.292  48.261  1.00 44.06           C  
ATOM   1298  OD1 ASP A 174      21.200 -21.404  48.694  1.00 35.40           O  
ATOM   1299  OD2 ASP A 174      20.893 -19.320  49.006  1.00 47.06           O  
ATOM   1300  N   THR A 175      20.975 -23.537  46.006  1.00 25.91           N  
ATOM   1301  CA  THR A 175      20.332 -24.837  46.136  1.00 31.18           C  
ATOM   1302  C   THR A 175      19.824 -25.196  47.551  1.00 37.44           C  
ATOM   1303  O   THR A 175      19.134 -26.220  47.700  1.00 34.89           O  
ATOM   1304  CB  THR A 175      21.284 -25.941  45.576  1.00 35.52           C  
ATOM   1305  OG1 THR A 175      22.537 -25.807  46.225  1.00 41.72           O  
ATOM   1306  CG2 THR A 175      21.422 -25.836  44.040  1.00 30.09           C  
ATOM   1307  N   ALA A 176      20.096 -24.349  48.577  1.00 36.77           N  
ATOM   1308  CA  ALA A 176      19.430 -24.459  49.880  1.00 34.55           C  
ATOM   1309  C   ALA A 176      18.005 -23.977  49.703  1.00 34.09           C  
ATOM   1310  O   ALA A 176      17.077 -24.499  50.335  1.00 32.18           O  
ATOM   1311  CB  ALA A 176      20.016 -23.557  50.947  1.00 29.40           C  
ATOM   1312  N   LEU A 177      17.824 -22.983  48.808  1.00 25.68           N  
ATOM   1313  CA  LEU A 177      16.506 -22.431  48.562  1.00 24.25           C  
ATOM   1314  C   LEU A 177      15.700 -23.029  47.398  1.00 30.49           C  
ATOM   1315  O   LEU A 177      14.464 -23.081  47.479  1.00 25.58           O  
ATOM   1316  CB  LEU A 177      16.683 -20.949  48.375  1.00 34.03           C  
ATOM   1317  CG  LEU A 177      17.151 -20.199  49.612  1.00 41.02           C  
ATOM   1318  CD1 LEU A 177      17.335 -18.758  49.257  1.00 40.73           C  
ATOM   1319  CD2 LEU A 177      16.116 -20.270  50.711  1.00 41.14           C  
ATOM   1320  N   MET A 178      16.328 -23.506  46.315  1.00 27.88           N  
ATOM   1321  CA  MET A 178      15.605 -24.068  45.157  1.00 24.64           C  
ATOM   1322  C   MET A 178      16.543 -25.061  44.535  1.00 15.20           C  
ATOM   1323  O   MET A 178      17.697 -24.725  44.299  1.00 22.04           O  
ATOM   1324  CB  MET A 178      15.272 -22.965  44.134  1.00 24.97           C  
ATOM   1325  CG  MET A 178      14.350 -23.526  43.050  1.00 37.40           C  
ATOM   1326  SD  MET A 178      14.025 -22.325  41.726  1.00 34.16           S  
ATOM   1327  CE  MET A 178      15.624 -22.293  40.939  1.00 28.69           C  
ATOM   1328  N   ALA A 179      16.135 -26.306  44.380  1.00 18.97           N  
ATOM   1329  CA  ALA A 179      16.960 -27.343  43.800  1.00 21.25           C  
ATOM   1330  C   ALA A 179      17.175 -27.052  42.312  1.00 32.90           C  
ATOM   1331  O   ALA A 179      16.345 -26.407  41.660  1.00 23.82           O  
ATOM   1332  CB  ALA A 179      16.276 -28.705  43.867  1.00 19.86           C  
ATOM   1333  N   ASP A 180      18.275 -27.497  41.758  1.00 25.51           N  
ATOM   1334  CA  ASP A 180      18.459 -27.512  40.305  1.00 29.77           C  
ATOM   1335  C   ASP A 180      17.437 -28.418  39.632  1.00 35.87           C  
ATOM   1336  O   ASP A 180      17.017 -29.425  40.230  1.00 25.57           O  
ATOM   1337  CB  ASP A 180      19.804 -28.048  39.948  1.00 22.82           C  
ATOM   1338  CG  ASP A 180      20.966 -27.176  40.326  1.00 19.28           C  
ATOM   1339  OD1 ASP A 180      20.783 -25.984  40.534  1.00 24.24           O  
ATOM   1340  OD2 ASP A 180      22.072 -27.706  40.385  1.00 34.46           O  
ATOM   1341  N   MET A 181      17.040 -28.135  38.384  1.00 21.42           N  
ATOM   1342  CA  MET A 181      16.020 -28.935  37.732  1.00 19.55           C  
ATOM   1343  C   MET A 181      16.540 -29.368  36.348  1.00 26.26           C  
ATOM   1344  O   MET A 181      17.428 -28.705  35.790  1.00 23.03           O  
ATOM   1345  CB  MET A 181      14.741 -28.115  37.558  1.00 20.30           C  
ATOM   1346  CG  MET A 181      14.208 -27.429  38.832  1.00 22.93           C  
ATOM   1347  SD  MET A 181      12.538 -26.784  38.747  1.00 27.32           S  
ATOM   1348  CE  MET A 181      13.039 -25.172  39.188  1.00 22.23           C  
ATOM   1349  N   GLU A 182      16.055 -30.464  35.782  1.00 23.25           N  
ATOM   1350  CA  GLU A 182      16.419 -30.849  34.433  1.00 28.22           C  
ATOM   1351  C   GLU A 182      15.314 -31.697  33.888  1.00 22.99           C  
ATOM   1352  O   GLU A 182      14.491 -32.218  34.658  1.00 23.60           O  
ATOM   1353  CB  GLU A 182      17.693 -31.633  34.372  1.00 27.70           C  
ATOM   1354  CG  GLU A 182      17.653 -32.917  35.150  1.00 39.91           C  
ATOM   1355  CD  GLU A 182      18.798 -33.865  34.827  1.00 49.50           C  
ATOM   1356  OE1 GLU A 182      19.958 -33.436  34.775  1.00 46.27           O  
ATOM   1357  OE2 GLU A 182      18.494 -35.043  34.614  1.00 81.45           O  
ATOM   1358  N   GLN A 183      15.218 -31.801  32.555  1.00 23.57           N  
ATOM   1359  CA  GLN A 183      14.186 -32.607  31.917  1.00 20.27           C  
ATOM   1360  C   GLN A 183      14.734 -33.027  30.559  1.00 24.71           C  
ATOM   1361  O   GLN A 183      15.397 -32.226  29.892  1.00 25.60           O  
ATOM   1362  CB  GLN A 183      12.923 -31.774  31.752  1.00 21.67           C  
ATOM   1363  CG  GLN A 183      11.739 -32.520  31.215  1.00 22.57           C  
ATOM   1364  CD  GLN A 183      10.536 -31.621  31.271  1.00 34.59           C  
ATOM   1365  OE1 GLN A 183      10.031 -31.397  32.344  1.00 33.27           O  
ATOM   1366  NE2 GLN A 183       9.947 -31.040  30.243  1.00 26.73           N  
ATOM   1367  N   LEU A 184      14.506 -34.276  30.212  1.00 25.90           N  
ATOM   1368  CA  LEU A 184      14.900 -34.830  28.935  1.00 25.47           C  
ATOM   1369  C   LEU A 184      13.623 -35.127  28.194  1.00 30.93           C  
ATOM   1370  O   LEU A 184      12.692 -35.640  28.813  1.00 29.59           O  
ATOM   1371  CB  LEU A 184      15.656 -36.119  29.106  1.00 30.36           C  
ATOM   1372  CG  LEU A 184      16.019 -36.860  27.796  1.00 53.58           C  
ATOM   1373  CD1 LEU A 184      17.325 -36.325  27.169  1.00 41.36           C  
ATOM   1374  CD2 LEU A 184      16.137 -38.333  28.120  1.00 61.50           C  
ATOM   1375  N   GLU A 185      13.503 -34.832  26.895  1.00 24.93           N  
ATOM   1376  CA  GLU A 185      12.284 -35.106  26.139  1.00 21.56           C  
ATOM   1377  C   GLU A 185      12.589 -35.929  24.871  1.00 20.96           C  
ATOM   1378  O   GLU A 185      13.661 -35.744  24.270  1.00 25.62           O  
ATOM   1379  CB  GLU A 185      11.596 -33.838  25.621  1.00 28.40           C  
ATOM   1380  CG  GLU A 185      11.036 -32.816  26.599  1.00 33.30           C  
ATOM   1381  CD  GLU A 185      11.903 -31.609  26.892  1.00 31.54           C  
ATOM   1382  OE1 GLU A 185      12.775 -31.231  26.123  1.00 27.29           O  
ATOM   1383  OE2 GLU A 185      11.691 -31.016  27.928  1.00 25.85           O  
ATOM   1384  N   LEU A 186      11.646 -36.789  24.489  1.00 24.15           N  
ATOM   1385  CA  LEU A 186      11.653 -37.500  23.212  1.00 28.00           C  
ATOM   1386  C   LEU A 186      10.327 -37.093  22.629  1.00 28.26           C  
ATOM   1387  O   LEU A 186       9.305 -37.108  23.330  1.00 29.09           O  
ATOM   1388  CB  LEU A 186      11.600 -39.020  23.305  1.00 30.48           C  
ATOM   1389  CG  LEU A 186      12.737 -39.599  24.072  1.00 49.76           C  
ATOM   1390  CD1 LEU A 186      12.437 -41.058  24.322  1.00 56.71           C  
ATOM   1391  CD2 LEU A 186      14.029 -39.335  23.332  1.00 41.46           C  
ATOM   1392  N   ALA A 187      10.310 -36.701  21.364  1.00 23.92           N  
ATOM   1393  CA  ALA A 187       9.078 -36.291  20.743  1.00 23.34           C  
ATOM   1394  C   ALA A 187       9.031 -36.945  19.363  1.00 27.75           C  
ATOM   1395  O   ALA A 187      10.069 -37.214  18.757  1.00 26.70           O  
ATOM   1396  CB  ALA A 187       9.074 -34.777  20.610  1.00 24.93           C  
ATOM   1397  N   ALA A 188       7.853 -37.216  18.873  1.00 25.88           N  
ATOM   1398  CA  ALA A 188       7.663 -37.789  17.563  1.00 34.01           C  
ATOM   1399  C   ALA A 188       6.512 -37.031  16.935  1.00 33.31           C  
ATOM   1400  O   ALA A 188       5.540 -36.744  17.644  1.00 29.55           O  
ATOM   1401  CB  ALA A 188       7.278 -39.264  17.674  1.00 26.52           C  
ATOM   1402  N   ILE A 189       6.550 -36.671  15.649  1.00 36.39           N  
ATOM   1403  CA  ILE A 189       5.415 -36.037  14.968  1.00 27.67           C  
ATOM   1404  C   ILE A 189       5.231 -36.770  13.625  1.00 37.92           C  
ATOM   1405  O   ILE A 189       6.221 -37.089  12.968  1.00 33.44           O  
ATOM   1406  CB  ILE A 189       5.690 -34.555  14.703  1.00 29.72           C  
ATOM   1407  CG1 ILE A 189       5.971 -33.831  15.991  1.00 39.00           C  
ATOM   1408  CG2 ILE A 189       4.471 -33.934  14.052  1.00 33.27           C  
ATOM   1409  CD1 ILE A 189       7.077 -32.793  15.839  1.00 38.17           C  
ATOM   1410  N   ALA A 190       4.005 -37.054  13.215  1.00 34.42           N  
ATOM   1411  CA  ALA A 190       3.697 -37.834  12.044  1.00 33.15           C  
ATOM   1412  C   ALA A 190       2.509 -37.223  11.388  1.00 43.94           C  
ATOM   1413  O   ALA A 190       1.528 -36.880  12.068  1.00 36.50           O  
ATOM   1414  CB  ALA A 190       3.273 -39.248  12.368  1.00 29.97           C  
ATOM   1415  N   LYS A 191       2.600 -37.037  10.076  1.00 49.78           N  
ATOM   1416  CA  LYS A 191       1.414 -36.648   9.317  1.00 48.56           C  
ATOM   1417  C   LYS A 191       1.095 -37.790   8.400  1.00 51.68           C  
ATOM   1418  O   LYS A 191       1.979 -38.318   7.727  1.00 65.27           O  
ATOM   1419  CB  LYS A 191       1.596 -35.413   8.439  1.00 49.42           C  
ATOM   1420  CG  LYS A 191       2.988 -35.255   7.842  1.00 75.96           C  
ATOM   1421  CD  LYS A 191       3.450 -33.831   8.138  1.00 86.39           C  
ATOM   1422  CE  LYS A 191       3.796 -33.646   9.617  1.00 88.43           C  
ATOM   1423  NZ  LYS A 191       3.690 -32.249  10.002  1.00 91.69           N  
ATOM   1424  N   PHE A 192      -0.144 -38.241   8.423  1.00 57.59           N  
ATOM   1425  CA  PHE A 192      -0.631 -39.312   7.574  1.00 49.63           C  
ATOM   1426  C   PHE A 192      -1.764 -38.691   6.778  1.00 55.22           C  
ATOM   1427  O   PHE A 192      -2.963 -38.943   6.982  1.00 60.13           O  
ATOM   1428  CB  PHE A 192      -1.160 -40.470   8.406  1.00 52.90           C  
ATOM   1429  CG  PHE A 192      -0.106 -41.110   9.279  1.00 55.44           C  
ATOM   1430  CD1 PHE A 192       1.159 -41.341   8.773  1.00 63.13           C  
ATOM   1431  CD2 PHE A 192      -0.444 -41.441  10.573  1.00 62.68           C  
ATOM   1432  CE1 PHE A 192       2.102 -41.910   9.584  1.00 71.79           C  
ATOM   1433  CE2 PHE A 192       0.510 -42.012  11.376  1.00 64.06           C  
ATOM   1434  CZ  PHE A 192       1.776 -42.244  10.882  1.00 66.40           C  
ATOM   1435  N   GLY A 193      -1.361 -37.770   5.903  1.00 53.26           N  
ATOM   1436  CA  GLY A 193      -2.343 -37.079   5.097  1.00 64.96           C  
ATOM   1437  C   GLY A 193      -3.109 -36.029   5.906  1.00 72.86           C  
ATOM   1438  O   GLY A 193      -2.497 -35.117   6.471  1.00 83.89           O  
ATOM   1439  N   ALA A 194      -4.437 -36.170   6.010  1.00 65.54           N  
ATOM   1440  CA  ALA A 194      -5.274 -35.195   6.707  1.00 58.81           C  
ATOM   1441  C   ALA A 194      -5.139 -35.243   8.241  1.00 53.68           C  
ATOM   1442  O   ALA A 194      -5.696 -34.378   8.931  1.00 41.71           O  
ATOM   1443  CB  ALA A 194      -6.725 -35.456   6.319  1.00 56.03           C  
ATOM   1444  N   THR A 195      -4.446 -36.286   8.739  1.00 51.68           N  
ATOM   1445  CA  THR A 195      -4.191 -36.606  10.142  1.00 43.81           C  
ATOM   1446  C   THR A 195      -2.808 -36.267  10.679  1.00 45.19           C  
ATOM   1447  O   THR A 195      -1.786 -36.640  10.106  1.00 37.22           O  
ATOM   1448  CB  THR A 195      -4.464 -38.101  10.326  1.00 33.57           C  
ATOM   1449  OG1 THR A 195      -5.800 -38.272   9.841  1.00 41.80           O  
ATOM   1450  CG2 THR A 195      -4.342 -38.606  11.756  1.00 33.82           C  
ATOM   1451  N   ASN A 196      -2.749 -35.582  11.812  1.00 33.40           N  
ATOM   1452  CA  ASN A 196      -1.485 -35.230  12.428  1.00 34.17           C  
ATOM   1453  C   ASN A 196      -1.419 -35.980  13.746  1.00 26.07           C  
ATOM   1454  O   ASN A 196      -2.456 -36.072  14.427  1.00 31.07           O  
ATOM   1455  CB  ASN A 196      -1.462 -33.757  12.688  1.00 34.94           C  
ATOM   1456  CG  ASN A 196      -1.494 -32.946  11.405  1.00 37.97           C  
ATOM   1457  OD1 ASN A 196      -0.518 -32.901  10.654  1.00 38.93           O  
ATOM   1458  ND2 ASN A 196      -2.596 -32.276  11.098  1.00 35.68           N  
ATOM   1459  N   VAL A 197      -0.292 -36.559  14.121  1.00 27.67           N  
ATOM   1460  CA  VAL A 197      -0.188 -37.257  15.380  1.00 27.06           C  
ATOM   1461  C   VAL A 197       1.051 -36.667  16.017  1.00 32.58           C  
ATOM   1462  O   VAL A 197       2.038 -36.440  15.321  1.00 35.46           O  
ATOM   1463  CB  VAL A 197      -0.021 -38.766  15.163  1.00 26.96           C  
ATOM   1464  CG1 VAL A 197       0.146 -39.477  16.495  1.00 31.44           C  
ATOM   1465  CG2 VAL A 197      -1.285 -39.339  14.562  1.00 30.72           C  
ATOM   1466  N   LYS A 198       1.028 -36.336  17.304  1.00 28.97           N  
ATOM   1467  CA  LYS A 198       2.191 -35.794  17.991  1.00 23.59           C  
ATOM   1468  C   LYS A 198       2.177 -36.537  19.331  1.00 20.72           C  
ATOM   1469  O   LYS A 198       1.100 -36.798  19.904  1.00 25.42           O  
ATOM   1470  CB  LYS A 198       2.030 -34.282  18.191  1.00 22.91           C  
ATOM   1471  CG  LYS A 198       3.317 -33.727  18.781  1.00 31.46           C  
ATOM   1472  CD  LYS A 198       3.327 -32.223  18.990  1.00 27.19           C  
ATOM   1473  CE  LYS A 198       3.301 -31.529  17.642  1.00 27.71           C  
ATOM   1474  NZ  LYS A 198       3.444 -30.081  17.745  1.00 22.82           N  
ATOM   1475  N   ALA A 199       3.360 -36.920  19.792  1.00 23.92           N  
ATOM   1476  CA  ALA A 199       3.512 -37.643  21.050  1.00 29.51           C  
ATOM   1477  C   ALA A 199       4.826 -37.264  21.694  1.00 31.31           C  
ATOM   1478  O   ALA A 199       5.773 -36.903  20.976  1.00 27.54           O  
ATOM   1479  CB  ALA A 199       3.547 -39.137  20.831  1.00 29.98           C  
ATOM   1480  N   TYR A 200       4.948 -37.287  23.029  1.00 24.08           N  
ATOM   1481  CA  TYR A 200       6.232 -36.978  23.647  1.00 25.77           C  
ATOM   1482  C   TYR A 200       6.312 -37.781  24.957  1.00 19.77           C  
ATOM   1483  O   TYR A 200       5.285 -38.229  25.471  1.00 25.09           O  
ATOM   1484  CB  TYR A 200       6.366 -35.468  23.965  1.00 21.68           C  
ATOM   1485  CG  TYR A 200       5.449 -35.011  25.114  1.00 27.89           C  
ATOM   1486  CD1 TYR A 200       4.100 -34.740  24.906  1.00 23.60           C  
ATOM   1487  CD2 TYR A 200       5.979 -34.928  26.414  1.00 26.80           C  
ATOM   1488  CE1 TYR A 200       3.280 -34.398  25.985  1.00 21.78           C  
ATOM   1489  CE2 TYR A 200       5.167 -34.592  27.493  1.00 21.58           C  
ATOM   1490  CZ  TYR A 200       3.825 -34.331  27.276  1.00 29.96           C  
ATOM   1491  OH  TYR A 200       3.038 -34.016  28.377  1.00 24.28           O  
ATOM   1492  N   TYR A 201       7.499 -37.895  25.487  1.00 22.60           N  
ATOM   1493  CA  TYR A 201       7.706 -38.468  26.778  1.00 24.74           C  
ATOM   1494  C   TYR A 201       8.768 -37.559  27.381  1.00 26.88           C  
ATOM   1495  O   TYR A 201       9.741 -37.191  26.708  1.00 24.56           O  
ATOM   1496  CB  TYR A 201       8.194 -39.901  26.603  1.00 25.19           C  
ATOM   1497  CG  TYR A 201       8.675 -40.448  27.936  1.00 34.01           C  
ATOM   1498  CD1 TYR A 201       7.727 -40.932  28.815  1.00 36.14           C  
ATOM   1499  CD2 TYR A 201      10.031 -40.414  28.250  1.00 34.68           C  
ATOM   1500  CE1 TYR A 201       8.137 -41.392  30.041  1.00 36.17           C  
ATOM   1501  CE2 TYR A 201      10.442 -40.870  29.481  1.00 35.36           C  
ATOM   1502  CZ  TYR A 201       9.481 -41.356  30.357  1.00 36.59           C  
ATOM   1503  OH  TYR A 201       9.869 -41.825  31.601  1.00 56.03           O  
ATOM   1504  N   ALA A 202       8.630 -37.196  28.663  1.00 27.52           N  
ATOM   1505  CA  ALA A 202       9.600 -36.329  29.339  1.00 25.10           C  
ATOM   1506  C   ALA A 202       9.877 -36.931  30.722  1.00 25.08           C  
ATOM   1507  O   ALA A 202       8.982 -37.486  31.356  1.00 25.54           O  
ATOM   1508  CB  ALA A 202       9.058 -34.895  29.564  1.00 22.21           C  
ATOM   1509  N   ASP A 203      11.085 -36.782  31.198  1.00 24.00           N  
ATOM   1510  CA  ASP A 203      11.489 -37.363  32.447  1.00 28.68           C  
ATOM   1511  C   ASP A 203      12.535 -36.459  33.079  1.00 29.57           C  
ATOM   1512  O   ASP A 203      13.419 -35.951  32.363  1.00 32.82           O  
ATOM   1513  CB  ASP A 203      12.041 -38.754  32.119  1.00 37.41           C  
ATOM   1514  CG  ASP A 203      12.421 -39.547  33.336  1.00 48.02           C  
ATOM   1515  OD1 ASP A 203      11.555 -40.148  33.968  1.00 75.41           O  
ATOM   1516  OD2 ASP A 203      13.595 -39.536  33.663  1.00 67.85           O  
ATOM   1517  N   GLY A 204      12.517 -36.218  34.397  1.00 32.61           N  
ATOM   1518  CA  GLY A 204      13.595 -35.437  34.988  1.00 28.05           C  
ATOM   1519  C   GLY A 204      13.367 -35.210  36.468  1.00 28.93           C  
ATOM   1520  O   GLY A 204      12.778 -36.061  37.158  1.00 27.42           O  
ATOM   1521  N   GLU A 205      13.792 -34.049  36.946  1.00 23.03           N  
ATOM   1522  CA  GLU A 205      13.529 -33.721  38.332  1.00 27.54           C  
ATOM   1523  C   GLU A 205      13.293 -32.246  38.482  1.00 28.34           C  
ATOM   1524  O   GLU A 205      13.832 -31.424  37.742  1.00 25.57           O  
ATOM   1525  CB  GLU A 205      14.677 -34.139  39.236  1.00 27.61           C  
ATOM   1526  CG  GLU A 205      15.986 -33.454  38.992  1.00 43.67           C  
ATOM   1527  CD  GLU A 205      17.151 -34.034  39.790  1.00 51.38           C  
ATOM   1528  OE1 GLU A 205      17.227 -35.262  39.922  1.00 51.17           O  
ATOM   1529  OE2 GLU A 205      17.983 -33.235  40.248  1.00 66.67           O  
ATOM   1530  N   LEU A 206      12.434 -31.947  39.450  1.00 21.41           N  
ATOM   1531  CA  LEU A 206      11.951 -30.610  39.719  1.00 19.79           C  
ATOM   1532  C   LEU A 206      12.248 -30.216  41.161  1.00 33.84           C  
ATOM   1533  O   LEU A 206      12.428 -31.096  42.002  1.00 26.21           O  
ATOM   1534  CB  LEU A 206      10.459 -30.554  39.522  1.00 20.83           C  
ATOM   1535  CG  LEU A 206       9.898 -30.808  38.130  1.00 25.89           C  
ATOM   1536  CD1 LEU A 206       8.383 -30.698  38.181  1.00 25.84           C  
ATOM   1537  CD2 LEU A 206      10.522 -29.805  37.148  1.00 21.85           C  
ATOM   1538  N   ASP A 207      12.317 -28.920  41.474  1.00 24.31           N  
ATOM   1539  CA  ASP A 207      12.413 -28.443  42.833  1.00 26.55           C  
ATOM   1540  C   ASP A 207      11.104 -28.863  43.501  1.00 29.31           C  
ATOM   1541  O   ASP A 207      10.014 -28.742  42.920  1.00 22.97           O  
ATOM   1542  CB  ASP A 207      12.536 -26.942  42.841  1.00 22.03           C  
ATOM   1543  CG  ASP A 207      12.384 -26.355  44.241  1.00 23.24           C  
ATOM   1544  OD1 ASP A 207      13.308 -26.532  45.038  1.00 24.98           O  
ATOM   1545  OD2 ASP A 207      11.350 -25.751  44.519  1.00 24.03           O  
ATOM   1546  N   ARG A 208      11.204 -29.311  44.760  1.00 26.76           N  
ATOM   1547  CA  ARG A 208      10.052 -29.752  45.541  1.00 22.68           C  
ATOM   1548  C   ARG A 208       8.952 -28.731  45.619  1.00 17.48           C  
ATOM   1549  O   ARG A 208       7.799 -29.036  45.306  1.00 22.76           O  
ATOM   1550  CB  ARG A 208      10.450 -30.093  46.997  1.00 24.59           C  
ATOM   1551  CG  ARG A 208       9.280 -30.540  47.905  1.00 26.44           C  
ATOM   1552  CD  ARG A 208       9.711 -30.470  49.382  1.00 20.80           C  
ATOM   1553  NE  ARG A 208       9.912 -29.091  49.803  1.00 20.58           N  
ATOM   1554  CZ  ARG A 208      11.067 -28.707  50.348  1.00 17.56           C  
ATOM   1555  NH1 ARG A 208      12.081 -29.547  50.557  1.00 22.76           N  
ATOM   1556  NH2 ARG A 208      11.220 -27.432  50.651  1.00 19.37           N  
ATOM   1557  N   ASP A 209       9.283 -27.519  46.063  1.00 16.79           N  
ATOM   1558  CA  ASP A 209       8.224 -26.561  46.241  1.00 17.98           C  
ATOM   1559  C   ASP A 209       7.692 -26.008  44.913  1.00 25.82           C  
ATOM   1560  O   ASP A 209       6.514 -25.676  44.824  1.00 23.17           O  
ATOM   1561  CB  ASP A 209       8.746 -25.456  47.156  1.00 24.37           C  
ATOM   1562  CG  ASP A 209       8.958 -25.951  48.609  1.00 28.77           C  
ATOM   1563  OD1 ASP A 209       8.332 -26.917  49.039  1.00 22.89           O  
ATOM   1564  OD2 ASP A 209       9.773 -25.356  49.292  1.00 27.21           O  
ATOM   1565  N   PHE A 210       8.491 -25.966  43.857  1.00 24.91           N  
ATOM   1566  CA  PHE A 210       7.994 -25.609  42.515  1.00 27.45           C  
ATOM   1567  C   PHE A 210       6.967 -26.694  42.077  1.00 21.30           C  
ATOM   1568  O   PHE A 210       5.830 -26.381  41.667  1.00 22.41           O  
ATOM   1569  CB  PHE A 210       9.258 -25.511  41.609  1.00 24.74           C  
ATOM   1570  CG  PHE A 210       9.033 -25.362  40.108  1.00 36.77           C  
ATOM   1571  CD1 PHE A 210       8.844 -26.489  39.318  1.00 36.73           C  
ATOM   1572  CD2 PHE A 210       9.010 -24.107  39.535  1.00 48.62           C  
ATOM   1573  CE1 PHE A 210       8.629 -26.361  37.958  1.00 42.01           C  
ATOM   1574  CE2 PHE A 210       8.796 -23.984  38.169  1.00 38.96           C  
ATOM   1575  CZ  PHE A 210       8.605 -25.107  37.388  1.00 34.54           C  
ATOM   1576  N   ALA A 211       7.288 -27.989  42.248  1.00 18.70           N  
ATOM   1577  CA  ALA A 211       6.367 -29.070  41.962  1.00 17.41           C  
ATOM   1578  C   ALA A 211       5.078 -28.999  42.740  1.00 21.61           C  
ATOM   1579  O   ALA A 211       3.986 -29.206  42.197  1.00 23.50           O  
ATOM   1580  CB  ALA A 211       7.087 -30.370  42.259  1.00 20.52           C  
ATOM   1581  N   ARG A 212       5.119 -28.675  44.039  1.00 24.46           N  
ATOM   1582  CA  ARG A 212       3.907 -28.580  44.840  1.00 21.96           C  
ATOM   1583  C   ARG A 212       3.031 -27.442  44.354  1.00 20.18           C  
ATOM   1584  O   ARG A 212       1.803 -27.553  44.346  1.00 23.86           O  
ATOM   1585  CB  ARG A 212       4.259 -28.343  46.321  1.00 19.67           C  
ATOM   1586  CG  ARG A 212       5.020 -29.538  46.960  1.00 22.71           C  
ATOM   1587  CD  ARG A 212       5.446 -29.292  48.472  1.00 23.65           C  
ATOM   1588  NE  ARG A 212       4.273 -28.986  49.277  1.00 20.64           N  
ATOM   1589  CZ  ARG A 212       3.513 -29.926  49.838  1.00 19.45           C  
ATOM   1590  NH1 ARG A 212       3.829 -31.205  49.748  1.00 22.61           N  
ATOM   1591  NH2 ARG A 212       2.434 -29.615  50.517  1.00 22.43           N  
ATOM   1592  N   ALA A 213       3.637 -26.328  43.942  1.00 22.64           N  
ATOM   1593  CA  ALA A 213       2.875 -25.177  43.421  1.00 24.94           C  
ATOM   1594  C   ALA A 213       2.142 -25.528  42.113  1.00 28.90           C  
ATOM   1595  O   ALA A 213       1.063 -24.985  41.886  1.00 28.23           O  
ATOM   1596  CB  ALA A 213       3.804 -23.997  43.173  1.00 18.67           C  
ATOM   1597  N   VAL A 214       2.628 -26.470  41.272  1.00 27.53           N  
ATOM   1598  CA  VAL A 214       1.899 -26.961  40.096  1.00 24.66           C  
ATOM   1599  C   VAL A 214       0.549 -27.454  40.554  1.00 28.81           C  
ATOM   1600  O   VAL A 214      -0.439 -27.180  39.876  1.00 36.46           O  
ATOM   1601  CB  VAL A 214       2.580 -28.169  39.376  1.00 28.48           C  
ATOM   1602  CG1 VAL A 214       1.708 -28.805  38.273  1.00 34.90           C  
ATOM   1603  CG2 VAL A 214       3.853 -27.658  38.787  1.00 30.97           C  
ATOM   1604  N   PHE A 215       0.479 -28.167  41.701  1.00 30.95           N  
ATOM   1605  CA  PHE A 215      -0.780 -28.734  42.192  1.00 22.46           C  
ATOM   1606  C   PHE A 215      -1.475 -27.849  43.206  1.00 22.21           C  
ATOM   1607  O   PHE A 215      -2.456 -28.240  43.854  1.00 31.72           O  
ATOM   1608  CB  PHE A 215      -0.532 -30.139  42.785  1.00 25.11           C  
ATOM   1609  CG  PHE A 215      -0.220 -31.216  41.740  1.00 24.68           C  
ATOM   1610  CD1 PHE A 215      -1.257 -31.912  41.157  1.00 29.63           C  
ATOM   1611  CD2 PHE A 215       1.084 -31.461  41.357  1.00 33.02           C  
ATOM   1612  CE1 PHE A 215      -0.979 -32.845  40.185  1.00 29.05           C  
ATOM   1613  CE2 PHE A 215       1.353 -32.394  40.383  1.00 34.93           C  
ATOM   1614  CZ  PHE A 215       0.323 -33.079  39.802  1.00 28.48           C  
ATOM   1615  N   ASP A 216      -0.985 -26.613  43.281  1.00 21.70           N  
ATOM   1616  CA  ASP A 216      -1.535 -25.593  44.127  1.00 28.43           C  
ATOM   1617  C   ASP A 216      -1.438 -25.965  45.612  1.00 31.75           C  
ATOM   1618  O   ASP A 216      -2.385 -25.730  46.383  1.00 34.20           O  
ATOM   1619  CB  ASP A 216      -2.975 -25.386  43.685  1.00 30.70           C  
ATOM   1620  CG  ASP A 216      -3.447 -23.971  43.857  1.00 58.07           C  
ATOM   1621  OD1 ASP A 216      -2.615 -23.066  43.765  1.00 71.62           O  
ATOM   1622  OD2 ASP A 216      -4.644 -23.792  44.079  1.00 83.68           O  
ATOM   1623  N   LEU A 217      -0.302 -26.558  45.999  1.00 27.44           N  
ATOM   1624  CA  LEU A 217      -0.097 -27.045  47.363  1.00 27.84           C  
ATOM   1625  C   LEU A 217       0.868 -26.098  48.046  1.00 27.78           C  
ATOM   1626  O   LEU A 217       1.775 -25.587  47.365  1.00 26.69           O  
ATOM   1627  CB  LEU A 217       0.482 -28.462  47.339  1.00 22.43           C  
ATOM   1628  CG  LEU A 217      -0.368 -29.545  46.687  1.00 21.31           C  
ATOM   1629  CD1 LEU A 217       0.425 -30.812  46.668  1.00 20.93           C  
ATOM   1630  CD2 LEU A 217      -1.675 -29.707  47.397  1.00 24.17           C  
ATOM   1631  N   THR A 218       0.654 -25.760  49.335  1.00 24.26           N  
ATOM   1632  CA  THR A 218       1.603 -24.878  50.056  1.00 27.38           C  
ATOM   1633  C   THR A 218       2.998 -25.499  50.095  1.00 19.15           C  
ATOM   1634  O   THR A 218       3.123 -26.738  50.111  1.00 25.68           O  
ATOM   1635  CB  THR A 218       1.172 -24.558  51.583  1.00 30.12           C  
ATOM   1636  OG1 THR A 218       0.441 -25.619  52.157  1.00 46.14           O  
ATOM   1637  CG2 THR A 218       0.361 -23.302  51.629  1.00 61.20           C  
ATOM   1638  N   PRO A 219       4.068 -24.709  50.157  1.00 21.50           N  
ATOM   1639  CA  PRO A 219       5.423 -25.218  50.277  1.00 23.92           C  
ATOM   1640  C   PRO A 219       5.713 -25.861  51.643  1.00 32.60           C  
ATOM   1641  O   PRO A 219       4.957 -25.603  52.600  1.00 29.02           O  
ATOM   1642  CB  PRO A 219       6.264 -24.003  49.999  1.00 26.19           C  
ATOM   1643  CG  PRO A 219       5.428 -22.849  50.465  1.00 25.43           C  
ATOM   1644  CD  PRO A 219       4.030 -23.251  50.079  1.00 20.73           C  
ATOM   1645  N   VAL A 220       6.764 -26.694  51.739  1.00 33.44           N  
ATOM   1646  CA  VAL A 220       7.141 -27.212  53.041  1.00 28.14           C  
ATOM   1647  C   VAL A 220       8.321 -26.376  53.539  1.00 37.97           C  
ATOM   1648  O   VAL A 220       9.198 -25.938  52.775  1.00 26.48           O  
ATOM   1649  CB  VAL A 220       7.474 -28.788  53.044  1.00 32.32           C  
ATOM   1650  CG1 VAL A 220       6.828 -29.437  51.860  1.00 24.32           C  
ATOM   1651  CG2 VAL A 220       8.915 -29.093  53.141  1.00 34.39           C  
ATOM   1652  N   ALA A 221       8.313 -26.094  54.847  1.00 25.77           N  
ATOM   1653  CA  ALA A 221       9.325 -25.258  55.460  1.00 22.75           C  
ATOM   1654  C   ALA A 221      10.534 -26.080  55.804  1.00 34.19           C  
ATOM   1655  O   ALA A 221      10.722 -26.485  56.955  1.00 35.48           O  
ATOM   1656  CB  ALA A 221       8.750 -24.626  56.716  1.00 25.04           C  
ATOM   1657  N   ALA A 222      11.347 -26.358  54.787  1.00 25.99           N  
ATOM   1658  CA  ALA A 222      12.566 -27.158  54.881  1.00 20.53           C  
ATOM   1659  C   ALA A 222      13.474 -26.719  53.755  1.00 27.31           C  
ATOM   1660  O   ALA A 222      13.019 -25.985  52.869  1.00 32.70           O  
ATOM   1661  CB  ALA A 222      12.334 -28.656  54.664  1.00 17.91           C  
ATOM   1662  N   ALA A 223      14.750 -27.089  53.799  1.00 27.27           N  
ATOM   1663  CA  ALA A 223      15.696 -26.836  52.713  1.00 33.28           C  
ATOM   1664  C   ALA A 223      15.235 -27.607  51.455  1.00 43.31           C  
ATOM   1665  O   ALA A 223      14.658 -28.721  51.516  1.00 26.72           O  
ATOM   1666  CB  ALA A 223      17.090 -27.326  53.081  1.00 24.82           C  
ATOM   1667  N   ALA A 224      15.479 -26.956  50.312  1.00 32.68           N  
ATOM   1668  CA  ALA A 224      15.033 -27.446  49.021  1.00 27.30           C  
ATOM   1669  C   ALA A 224      15.546 -28.827  48.722  1.00 25.24           C  
ATOM   1670  O   ALA A 224      16.683 -29.196  49.031  1.00 29.56           O  
ATOM   1671  CB  ALA A 224      15.531 -26.539  47.921  1.00 25.05           C  
ATOM   1672  N   THR A 225      14.685 -29.618  48.132  1.00 24.13           N  
ATOM   1673  CA  THR A 225      15.074 -30.941  47.687  1.00 25.61           C  
ATOM   1674  C   THR A 225      14.543 -31.084  46.261  1.00 36.20           C  
ATOM   1675  O   THR A 225      13.669 -30.284  45.868  1.00 26.28           O  
ATOM   1676  CB  THR A 225      14.448 -32.041  48.615  1.00 32.35           C  
ATOM   1677  OG1 THR A 225      13.015 -31.944  48.645  1.00 30.23           O  
ATOM   1678  CG2 THR A 225      14.976 -31.857  50.034  1.00 42.70           C  
ATOM   1679  N   ALA A 226      15.011 -32.065  45.487  1.00 30.91           N  
ATOM   1680  CA  ALA A 226      14.462 -32.311  44.154  1.00 36.76           C  
ATOM   1681  C   ALA A 226      13.513 -33.515  44.156  1.00 34.85           C  
ATOM   1682  O   ALA A 226      13.738 -34.427  44.952  1.00 40.82           O  
ATOM   1683  CB  ALA A 226      15.588 -32.581  43.203  1.00 25.21           C  
ATOM   1684  N   VAL A 227      12.415 -33.564  43.381  1.00 31.55           N  
ATOM   1685  CA  VAL A 227      11.510 -34.715  43.239  1.00 25.98           C  
ATOM   1686  C   VAL A 227      11.584 -35.229  41.797  1.00 37.72           C  
ATOM   1687  O   VAL A 227      11.799 -34.425  40.888  1.00 30.25           O  
ATOM   1688  CB  VAL A 227      10.031 -34.368  43.536  1.00 26.42           C  
ATOM   1689  CG1 VAL A 227       9.922 -34.313  45.040  1.00 35.42           C  
ATOM   1690  CG2 VAL A 227       9.569 -33.052  42.897  1.00 24.43           C  
ATOM   1691  N   ASP A 228      11.438 -36.512  41.495  1.00 28.65           N  
ATOM   1692  CA  ASP A 228      11.515 -37.003  40.118  1.00 30.27           C  
ATOM   1693  C   ASP A 228      10.189 -36.852  39.473  1.00 27.49           C  
ATOM   1694  O   ASP A 228       9.171 -36.951  40.160  1.00 27.44           O  
ATOM   1695  CB  ASP A 228      11.888 -38.488  40.051  1.00 29.18           C  
ATOM   1696  CG  ASP A 228      13.287 -38.733  40.626  1.00 36.93           C  
ATOM   1697  OD1 ASP A 228      14.240 -38.049  40.232  1.00 60.99           O  
ATOM   1698  OD2 ASP A 228      13.419 -39.588  41.502  1.00 67.40           O  
ATOM   1699  N   HIS A 229      10.128 -36.639  38.165  1.00 27.81           N  
ATOM   1700  CA  HIS A 229       8.830 -36.503  37.511  1.00 27.57           C  
ATOM   1701  C   HIS A 229       8.896 -37.122  36.125  1.00 22.47           C  
ATOM   1702  O   HIS A 229       9.984 -37.331  35.560  1.00 25.44           O  
ATOM   1703  CB  HIS A 229       8.397 -35.013  37.341  1.00 24.81           C  
ATOM   1704  CG  HIS A 229       9.312 -34.181  36.403  1.00 25.52           C  
ATOM   1705  ND1 HIS A 229      10.615 -33.896  36.508  1.00 26.06           N  
ATOM   1706  CD2 HIS A 229       8.872 -33.550  35.242  1.00 26.80           C  
ATOM   1707  CE1 HIS A 229      10.975 -33.137  35.493  1.00 31.27           C  
ATOM   1708  NE2 HIS A 229       9.917 -32.942  34.749  1.00 24.74           N  
ATOM   1709  N   LYS A 230       7.707 -37.415  35.634  1.00 25.04           N  
ATOM   1710  CA  LYS A 230       7.595 -37.800  34.269  1.00 31.02           C  
ATOM   1711  C   LYS A 230       6.333 -37.202  33.715  1.00 29.49           C  
ATOM   1712  O   LYS A 230       5.422 -36.866  34.461  1.00 24.54           O  
ATOM   1713  CB  LYS A 230       7.587 -39.292  34.172  1.00 26.28           C  
ATOM   1714  CG  LYS A 230       6.388 -40.093  34.564  1.00 47.78           C  
ATOM   1715  CD  LYS A 230       6.930 -41.543  34.609  1.00 73.52           C  
ATOM   1716  CE  LYS A 230       8.071 -41.699  35.655  1.00 89.17           C  
ATOM   1717  NZ  LYS A 230       8.899 -42.887  35.501  1.00101.19           N  
ATOM   1718  N   ALA A 231       6.307 -36.988  32.407  1.00 28.59           N  
ATOM   1719  CA  ALA A 231       5.160 -36.419  31.722  1.00 23.31           C  
ATOM   1720  C   ALA A 231       5.135 -37.079  30.339  1.00 23.75           C  
ATOM   1721  O   ALA A 231       6.189 -37.406  29.764  1.00 27.95           O  
ATOM   1722  CB  ALA A 231       5.364 -34.920  31.575  1.00 23.08           C  
ATOM   1723  N   TYR A 232       3.972 -37.375  29.801  1.00 23.45           N  
ATOM   1724  CA  TYR A 232       3.874 -37.908  28.445  1.00 32.26           C  
ATOM   1725  C   TYR A 232       2.487 -37.605  27.895  1.00 29.25           C  
ATOM   1726  O   TYR A 232       1.550 -37.348  28.668  1.00 27.46           O  
ATOM   1727  CB  TYR A 232       4.162 -39.439  28.413  1.00 28.02           C  
ATOM   1728  CG  TYR A 232       3.494 -40.240  29.515  1.00 27.17           C  
ATOM   1729  CD1 TYR A 232       4.167 -40.375  30.718  1.00 35.93           C  
ATOM   1730  CD2 TYR A 232       2.236 -40.789  29.331  1.00 30.56           C  
ATOM   1731  CE1 TYR A 232       3.571 -41.057  31.753  1.00 40.00           C  
ATOM   1732  CE2 TYR A 232       1.634 -41.488  30.366  1.00 39.00           C  
ATOM   1733  CZ  TYR A 232       2.312 -41.611  31.573  1.00 38.48           C  
ATOM   1734  OH  TYR A 232       1.717 -42.278  32.642  1.00 56.10           O  
ATOM   1735  N   GLY A 233       2.285 -37.561  26.574  1.00 22.51           N  
ATOM   1736  CA  GLY A 233       0.985 -37.244  26.014  1.00 24.02           C  
ATOM   1737  C   GLY A 233       0.950 -37.507  24.514  1.00 26.25           C  
ATOM   1738  O   GLY A 233       1.941 -37.833  23.856  1.00 24.83           O  
ATOM   1739  N   LEU A 234      -0.223 -37.323  23.996  1.00 25.95           N  
ATOM   1740  CA  LEU A 234      -0.460 -37.640  22.618  1.00 24.03           C  
ATOM   1741  C   LEU A 234      -1.584 -36.777  22.103  1.00 28.04           C  
ATOM   1742  O   LEU A 234      -2.514 -36.506  22.890  1.00 28.24           O  
ATOM   1743  CB  LEU A 234      -0.866 -39.070  22.566  1.00 31.10           C  
ATOM   1744  CG  LEU A 234      -1.539 -39.544  21.317  1.00 41.38           C  
ATOM   1745  CD1 LEU A 234      -0.480 -39.786  20.245  1.00 34.15           C  
ATOM   1746  CD2 LEU A 234      -2.356 -40.751  21.648  1.00 42.03           C  
ATOM   1747  N   SER A 235      -1.534 -36.329  20.833  1.00 26.13           N  
ATOM   1748  CA  SER A 235      -2.724 -35.732  20.265  1.00 25.83           C  
ATOM   1749  C   SER A 235      -2.895 -36.213  18.836  1.00 25.93           C  
ATOM   1750  O   SER A 235      -1.899 -36.580  18.179  1.00 28.39           O  
ATOM   1751  CB  SER A 235      -2.699 -34.190  20.226  1.00 32.71           C  
ATOM   1752  OG  SER A 235      -1.734 -33.546  19.431  1.00 30.62           O  
ATOM   1753  N   VAL A 236      -4.162 -36.183  18.415  1.00 24.17           N  
ATOM   1754  CA  VAL A 236      -4.537 -36.596  17.082  1.00 35.92           C  
ATOM   1755  C   VAL A 236      -5.526 -35.562  16.575  1.00 30.98           C  
ATOM   1756  O   VAL A 236      -6.478 -35.231  17.299  1.00 29.40           O  
ATOM   1757  CB  VAL A 236      -5.242 -37.999  17.076  1.00 37.21           C  
ATOM   1758  CG1 VAL A 236      -5.538 -38.410  15.632  1.00 36.84           C  
ATOM   1759  CG2 VAL A 236      -4.348 -39.079  17.632  1.00 26.11           C  
ATOM   1760  N   ASP A 237      -5.348 -35.028  15.361  1.00 32.91           N  
ATOM   1761  CA  ASP A 237      -6.394 -34.211  14.758  1.00 25.51           C  
ATOM   1762  C   ASP A 237      -6.495 -34.598  13.289  1.00 35.12           C  
ATOM   1763  O   ASP A 237      -5.479 -35.003  12.696  1.00 26.89           O  
ATOM   1764  CB  ASP A 237      -6.092 -32.730  14.842  1.00 18.52           C  
ATOM   1765  CG  ASP A 237      -4.815 -32.240  14.216  1.00 30.05           C  
ATOM   1766  OD1 ASP A 237      -3.766 -32.292  14.847  1.00 32.68           O  
ATOM   1767  OD2 ASP A 237      -4.885 -31.769  13.090  1.00 32.21           O  
ATOM   1768  N   SER A 238      -7.670 -34.485  12.706  1.00 26.63           N  
ATOM   1769  CA  SER A 238      -7.842 -34.834  11.317  1.00 37.70           C  
ATOM   1770  C   SER A 238      -8.823 -33.890  10.690  1.00 32.20           C  
ATOM   1771  O   SER A 238      -9.807 -33.469  11.318  1.00 31.51           O  
ATOM   1772  CB  SER A 238      -8.377 -36.244  11.179  1.00 41.15           C  
ATOM   1773  OG  SER A 238      -8.165 -36.687   9.837  1.00 71.90           O  
ATOM   1774  N   THR A 239      -8.540 -33.586   9.431  1.00 36.96           N  
ATOM   1775  CA  THR A 239      -9.398 -32.696   8.670  1.00 32.71           C  
ATOM   1776  C   THR A 239     -10.155 -33.389   7.544  1.00 36.75           C  
ATOM   1777  O   THR A 239      -9.556 -34.067   6.710  1.00 49.53           O  
ATOM   1778  CB  THR A 239      -8.536 -31.582   8.106  1.00 32.24           C  
ATOM   1779  OG1 THR A 239      -7.852 -30.961   9.187  1.00 37.41           O  
ATOM   1780  CG2 THR A 239      -9.370 -30.533   7.409  1.00 43.12           C  
ATOM   1781  N   PHE A 240     -11.462 -33.214   7.506  1.00 32.39           N  
ATOM   1782  CA  PHE A 240     -12.341 -33.703   6.445  1.00 34.60           C  
ATOM   1783  C   PHE A 240     -13.163 -32.519   5.907  1.00 35.95           C  
ATOM   1784  O   PHE A 240     -14.186 -32.080   6.472  1.00 35.29           O  
ATOM   1785  CB  PHE A 240     -13.350 -34.771   6.926  1.00 44.97           C  
ATOM   1786  CG  PHE A 240     -13.345 -35.118   8.409  1.00 76.78           C  
ATOM   1787  CD1 PHE A 240     -12.351 -35.948   8.916  1.00 80.80           C  
ATOM   1788  CD2 PHE A 240     -14.340 -34.611   9.227  1.00 80.91           C  
ATOM   1789  CE1 PHE A 240     -12.351 -36.280  10.251  1.00 68.89           C  
ATOM   1790  CE2 PHE A 240     -14.331 -34.950  10.563  1.00 82.55           C  
ATOM   1791  CZ  PHE A 240     -13.340 -35.778  11.067  1.00 81.89           C  
ATOM   1792  N   GLY A 241     -12.680 -31.948   4.808  1.00 34.25           N  
ATOM   1793  CA  GLY A 241     -13.350 -30.824   4.204  1.00 33.96           C  
ATOM   1794  C   GLY A 241     -13.040 -29.537   4.968  1.00 29.52           C  
ATOM   1795  O   GLY A 241     -11.882 -29.126   5.127  1.00 42.22           O  
ATOM   1796  N   ALA A 242     -14.115 -28.897   5.419  1.00 36.46           N  
ATOM   1797  CA  ALA A 242     -14.010 -27.686   6.217  1.00 38.95           C  
ATOM   1798  C   ALA A 242     -13.882 -28.010   7.720  1.00 32.64           C  
ATOM   1799  O   ALA A 242     -13.627 -27.086   8.491  1.00 34.81           O  
ATOM   1800  CB  ALA A 242     -15.262 -26.850   5.969  1.00 29.62           C  
ATOM   1801  N   THR A 243     -14.038 -29.268   8.161  1.00 28.72           N  
ATOM   1802  CA  THR A 243     -14.065 -29.689   9.551  1.00 32.77           C  
ATOM   1803  C   THR A 243     -12.794 -30.303  10.043  1.00 38.01           C  
ATOM   1804  O   THR A 243     -12.331 -31.287   9.467  1.00 34.60           O  
ATOM   1805  CB  THR A 243     -15.173 -30.719   9.790  1.00 29.34           C  
ATOM   1806  OG1 THR A 243     -16.361 -30.152   9.254  1.00 38.80           O  
ATOM   1807  CG2 THR A 243     -15.431 -31.019  11.255  1.00 36.27           C  
ATOM   1808  N   THR A 244     -12.219 -29.739  11.095  1.00 27.70           N  
ATOM   1809  CA  THR A 244     -11.122 -30.407  11.774  1.00 21.95           C  
ATOM   1810  C   THR A 244     -11.688 -30.849  13.123  1.00 38.04           C  
ATOM   1811  O   THR A 244     -12.524 -30.149  13.726  1.00 29.47           O  
ATOM   1812  CB  THR A 244     -10.004 -29.457  11.967  1.00 27.11           C  
ATOM   1813  OG1 THR A 244      -9.643 -29.054  10.641  1.00 30.63           O  
ATOM   1814  CG2 THR A 244      -8.854 -30.056  12.776  1.00 22.16           C  
ATOM   1815  N   VAL A 245     -11.298 -32.053  13.533  1.00 32.84           N  
ATOM   1816  CA  VAL A 245     -11.691 -32.672  14.799  1.00 23.59           C  
ATOM   1817  C   VAL A 245     -10.380 -33.151  15.399  1.00 30.46           C  
ATOM   1818  O   VAL A 245      -9.480 -33.587  14.666  1.00 28.97           O  
ATOM   1819  CB  VAL A 245     -12.643 -33.860  14.564  1.00 26.50           C  
ATOM   1820  CG1 VAL A 245     -12.936 -34.616  15.851  1.00 42.06           C  
ATOM   1821  CG2 VAL A 245     -13.983 -33.313  14.105  1.00 29.56           C  
ATOM   1822  N   GLY A 246     -10.217 -32.981  16.715  1.00 30.97           N  
ATOM   1823  CA  GLY A 246      -8.989 -33.402  17.357  1.00 28.37           C  
ATOM   1824  C   GLY A 246      -9.056 -33.404  18.881  1.00 31.52           C  
ATOM   1825  O   GLY A 246     -10.015 -32.875  19.467  1.00 29.24           O  
ATOM   1826  N   GLY A 247      -8.033 -33.959  19.524  1.00 26.92           N  
ATOM   1827  CA  GLY A 247      -8.013 -34.006  20.963  1.00 25.58           C  
ATOM   1828  C   GLY A 247      -6.646 -34.406  21.421  1.00 36.99           C  
ATOM   1829  O   GLY A 247      -5.803 -34.741  20.587  1.00 25.32           O  
ATOM   1830  N   TYR A 248      -6.416 -34.408  22.735  1.00 23.62           N  
ATOM   1831  CA  TYR A 248      -5.115 -34.748  23.270  1.00 20.94           C  
ATOM   1832  C   TYR A 248      -5.325 -35.358  24.660  1.00 20.63           C  
ATOM   1833  O   TYR A 248      -6.406 -35.164  25.255  1.00 21.90           O  
ATOM   1834  CB  TYR A 248      -4.231 -33.486  23.387  1.00 21.56           C  
ATOM   1835  CG  TYR A 248      -4.760 -32.431  24.364  1.00 25.21           C  
ATOM   1836  CD1 TYR A 248      -4.438 -32.548  25.708  1.00 27.92           C  
ATOM   1837  CD2 TYR A 248      -5.615 -31.411  23.968  1.00 24.90           C  
ATOM   1838  CE1 TYR A 248      -4.966 -31.665  26.639  1.00 26.26           C  
ATOM   1839  CE2 TYR A 248      -6.151 -30.519  24.904  1.00 31.70           C  
ATOM   1840  CZ  TYR A 248      -5.819 -30.648  26.258  1.00 26.70           C  
ATOM   1841  OH  TYR A 248      -6.318 -29.797  27.251  1.00 25.24           O  
ATOM   1842  N   VAL A 249      -4.321 -36.040  25.195  1.00 24.77           N  
ATOM   1843  CA  VAL A 249      -4.367 -36.470  26.593  1.00 27.74           C  
ATOM   1844  C   VAL A 249      -2.923 -36.423  27.059  1.00 28.50           C  
ATOM   1845  O   VAL A 249      -1.975 -36.725  26.318  1.00 24.37           O  
ATOM   1846  CB  VAL A 249      -5.003 -37.894  26.729  1.00 30.76           C  
ATOM   1847  CG1 VAL A 249      -4.158 -38.959  26.069  1.00 36.77           C  
ATOM   1848  CG2 VAL A 249      -5.154 -38.207  28.211  1.00 29.16           C  
ATOM   1849  N   GLN A 250      -2.715 -35.905  28.269  1.00 22.78           N  
ATOM   1850  CA  GLN A 250      -1.387 -35.776  28.807  1.00 23.77           C  
ATOM   1851  C   GLN A 250      -1.468 -36.243  30.256  1.00 25.06           C  
ATOM   1852  O   GLN A 250      -2.549 -36.178  30.872  1.00 21.33           O  
ATOM   1853  CB  GLN A 250      -0.900 -34.339  28.864  1.00 23.22           C  
ATOM   1854  CG  GLN A 250      -1.124 -33.547  27.625  1.00 24.76           C  
ATOM   1855  CD  GLN A 250      -0.215 -32.353  27.600  1.00 18.99           C  
ATOM   1856  OE1 GLN A 250       0.992 -32.480  27.720  1.00 23.92           O  
ATOM   1857  NE2 GLN A 250      -0.707 -31.141  27.461  1.00 20.19           N  
ATOM   1858  N   VAL A 251      -0.358 -36.761  30.770  1.00 29.03           N  
ATOM   1859  CA  VAL A 251      -0.307 -37.017  32.189  1.00 26.98           C  
ATOM   1860  C   VAL A 251       1.015 -36.492  32.676  1.00 25.15           C  
ATOM   1861  O   VAL A 251       2.068 -36.481  32.014  1.00 26.27           O  
ATOM   1862  CB  VAL A 251      -0.510 -38.552  32.608  1.00 33.15           C  
ATOM   1863  CG1 VAL A 251      -0.968 -39.355  31.434  1.00 26.27           C  
ATOM   1864  CG2 VAL A 251       0.702 -39.104  33.283  1.00 32.70           C  
ATOM   1865  N   LEU A 252       0.873 -35.954  33.891  1.00 23.70           N  
ATOM   1866  CA  LEU A 252       2.023 -35.435  34.601  1.00 21.27           C  
ATOM   1867  C   LEU A 252       2.033 -36.219  35.906  1.00 26.27           C  
ATOM   1868  O   LEU A 252       0.990 -36.303  36.555  1.00 26.01           O  
ATOM   1869  CB  LEU A 252       1.825 -33.976  34.863  1.00 22.83           C  
ATOM   1870  CG  LEU A 252       2.836 -33.284  35.749  1.00 32.44           C  
ATOM   1871  CD1 LEU A 252       4.251 -33.390  35.206  1.00 25.21           C  
ATOM   1872  CD2 LEU A 252       2.333 -31.861  35.904  1.00 28.50           C  
ATOM   1873  N   ASP A 253       3.167 -36.799  36.251  1.00 25.12           N  
ATOM   1874  CA  ASP A 253       3.301 -37.651  37.415  1.00 34.71           C  
ATOM   1875  C   ASP A 253       4.503 -37.199  38.247  1.00 25.50           C  
ATOM   1876  O   ASP A 253       5.652 -37.463  37.851  1.00 26.91           O  
ATOM   1877  CB  ASP A 253       3.454 -39.066  36.865  1.00 31.51           C  
ATOM   1878  CG  ASP A 253       3.436 -40.240  37.841  1.00 52.04           C  
ATOM   1879  OD1 ASP A 253       3.598 -40.015  39.040  1.00 49.77           O  
ATOM   1880  OD2 ASP A 253       3.257 -41.381  37.389  1.00 67.89           O  
ATOM   1881  N   ILE A 254       4.327 -36.531  39.394  1.00 24.18           N  
ATOM   1882  CA  ILE A 254       5.467 -36.087  40.166  1.00 23.34           C  
ATOM   1883  C   ILE A 254       5.483 -36.909  41.440  1.00 30.07           C  
ATOM   1884  O   ILE A 254       4.540 -36.908  42.249  1.00 29.61           O  
ATOM   1885  CB  ILE A 254       5.378 -34.625  40.550  1.00 20.78           C  
ATOM   1886  CG1 ILE A 254       5.120 -33.770  39.278  1.00 23.54           C  
ATOM   1887  CG2 ILE A 254       6.696 -34.241  41.236  1.00 20.01           C  
ATOM   1888  CD1 ILE A 254       4.936 -32.261  39.497  1.00 30.48           C  
ATOM   1889  N   ASP A 255       6.606 -37.585  41.539  1.00 27.10           N  
ATOM   1890  CA  ASP A 255       6.902 -38.482  42.630  1.00 37.11           C  
ATOM   1891  C   ASP A 255       6.845 -37.723  43.957  1.00 34.48           C  
ATOM   1892  O   ASP A 255       7.377 -36.618  44.107  1.00 33.20           O  
ATOM   1893  CB  ASP A 255       8.290 -39.064  42.417  1.00 36.96           C  
ATOM   1894  CG  ASP A 255       8.690 -40.163  43.403  1.00 61.77           C  
ATOM   1895  OD1 ASP A 255       7.879 -41.053  43.678  1.00 63.74           O  
ATOM   1896  OD2 ASP A 255       9.818 -40.132  43.893  1.00 54.70           O  
ATOM   1897  N   THR A 256       6.132 -38.389  44.869  1.00 38.04           N  
ATOM   1898  CA  THR A 256       5.860 -37.972  46.235  1.00 27.79           C  
ATOM   1899  C   THR A 256       4.849 -36.835  46.246  1.00 45.76           C  
ATOM   1900  O   THR A 256       4.408 -36.503  47.344  1.00 49.10           O  
ATOM   1901  CB  THR A 256       7.129 -37.485  47.075  1.00 37.48           C  
ATOM   1902  OG1 THR A 256       7.491 -36.195  46.656  1.00 37.65           O  
ATOM   1903  CG2 THR A 256       8.331 -38.390  46.918  1.00 36.65           C  
ATOM   1904  N   ILE A 257       4.398 -36.198  45.147  1.00 46.16           N  
ATOM   1905  CA  ILE A 257       3.436 -35.093  45.238  1.00 36.33           C  
ATOM   1906  C   ILE A 257       2.150 -35.643  44.702  1.00 45.12           C  
ATOM   1907  O   ILE A 257       1.300 -36.026  45.495  1.00 39.40           O  
ATOM   1908  CB  ILE A 257       3.835 -33.831  44.393  1.00 30.69           C  
ATOM   1909  CG1 ILE A 257       5.261 -33.393  44.729  1.00 26.95           C  
ATOM   1910  CG2 ILE A 257       2.776 -32.750  44.585  1.00 28.34           C  
ATOM   1911  CD1 ILE A 257       5.617 -33.165  46.186  1.00 47.06           C  
ATOM   1912  N   ASP A 258       1.980 -35.772  43.386  1.00 26.70           N  
ATOM   1913  CA  ASP A 258       0.726 -36.235  42.834  1.00 20.95           C  
ATOM   1914  C   ASP A 258       0.900 -36.477  41.310  1.00 21.68           C  
ATOM   1915  O   ASP A 258       1.987 -36.248  40.781  1.00 25.33           O  
ATOM   1916  CB  ASP A 258      -0.359 -35.176  43.097  1.00 24.31           C  
ATOM   1917  CG  ASP A 258      -1.793 -35.738  43.188  1.00 39.02           C  
ATOM   1918  OD1 ASP A 258      -2.027 -36.953  43.009  1.00 36.22           O  
ATOM   1919  OD2 ASP A 258      -2.705 -34.944  43.447  1.00 49.23           O  
ATOM   1920  N   ASP A 259      -0.152 -36.966  40.657  1.00 32.03           N  
ATOM   1921  CA  ASP A 259      -0.230 -37.188  39.229  1.00 35.51           C  
ATOM   1922  C   ASP A 259      -1.548 -36.603  38.763  1.00 29.00           C  
ATOM   1923  O   ASP A 259      -2.461 -36.390  39.566  1.00 29.90           O  
ATOM   1924  CB  ASP A 259      -0.192 -38.674  38.860  1.00 29.16           C  
ATOM   1925  CG  ASP A 259      -1.224 -39.576  39.537  1.00 32.42           C  
ATOM   1926  OD1 ASP A 259      -2.393 -39.544  39.181  1.00 53.80           O  
ATOM   1927  OD2 ASP A 259      -0.846 -40.322  40.433  1.00 66.04           O  
ATOM   1928  N   VAL A 260      -1.665 -36.276  37.483  1.00 23.61           N  
ATOM   1929  CA  VAL A 260      -2.910 -35.780  36.928  1.00 21.31           C  
ATOM   1930  C   VAL A 260      -2.886 -36.211  35.452  1.00 25.64           C  
ATOM   1931  O   VAL A 260      -1.818 -36.338  34.836  1.00 25.09           O  
ATOM   1932  CB  VAL A 260      -2.958 -34.221  37.123  1.00 21.65           C  
ATOM   1933  CG1 VAL A 260      -1.779 -33.495  36.460  1.00 22.43           C  
ATOM   1934  CG2 VAL A 260      -4.300 -33.747  36.600  1.00 23.25           C  
ATOM   1935  N   THR A 261      -4.073 -36.529  34.953  1.00 26.37           N  
ATOM   1936  CA  THR A 261      -4.323 -36.788  33.551  1.00 29.83           C  
ATOM   1937  C   THR A 261      -5.306 -35.690  33.145  1.00 28.17           C  
ATOM   1938  O   THR A 261      -6.336 -35.465  33.799  1.00 27.71           O  
ATOM   1939  CB  THR A 261      -4.949 -38.190  33.349  1.00 28.09           C  
ATOM   1940  OG1 THR A 261      -3.930 -39.126  33.734  1.00 29.64           O  
ATOM   1941  CG2 THR A 261      -5.462 -38.417  31.908  1.00 25.84           C  
ATOM   1942  N   TYR A 262      -4.983 -34.982  32.066  1.00 29.21           N  
ATOM   1943  CA  TYR A 262      -5.785 -33.861  31.598  1.00 24.79           C  
ATOM   1944  C   TYR A 262      -5.915 -34.030  30.083  1.00 23.96           C  
ATOM   1945  O   TYR A 262      -5.044 -34.609  29.415  1.00 24.24           O  
ATOM   1946  CB  TYR A 262      -5.088 -32.537  31.993  1.00 24.82           C  
ATOM   1947  CG  TYR A 262      -3.579 -32.350  31.796  1.00 25.17           C  
ATOM   1948  CD1 TYR A 262      -2.604 -33.061  32.501  1.00 21.56           C  
ATOM   1949  CD2 TYR A 262      -3.159 -31.368  30.913  1.00 32.68           C  
ATOM   1950  CE1 TYR A 262      -1.248 -32.785  32.330  1.00 28.66           C  
ATOM   1951  CE2 TYR A 262      -1.802 -31.079  30.741  1.00 24.26           C  
ATOM   1952  CZ  TYR A 262      -0.855 -31.784  31.449  1.00 29.01           C  
ATOM   1953  OH  TYR A 262       0.468 -31.450  31.285  1.00 26.50           O  
ATOM   1954  N   TYR A 263      -7.042 -33.622  29.559  1.00 22.32           N  
ATOM   1955  CA  TYR A 263      -7.335 -33.906  28.175  1.00 30.67           C  
ATOM   1956  C   TYR A 263      -8.337 -32.893  27.616  1.00 32.19           C  
ATOM   1957  O   TYR A 263      -8.975 -32.135  28.353  1.00 24.76           O  
ATOM   1958  CB  TYR A 263      -7.857 -35.363  28.104  1.00 25.45           C  
ATOM   1959  CG  TYR A 263      -9.175 -35.513  28.819  1.00 36.72           C  
ATOM   1960  CD1 TYR A 263     -10.316 -35.199  28.093  1.00 42.51           C  
ATOM   1961  CD2 TYR A 263      -9.207 -35.844  30.165  1.00 40.64           C  
ATOM   1962  CE1 TYR A 263     -11.539 -35.174  28.691  1.00 50.49           C  
ATOM   1963  CE2 TYR A 263     -10.438 -35.822  30.778  1.00 36.33           C  
ATOM   1964  CZ  TYR A 263     -11.580 -35.477  30.032  1.00 50.61           C  
ATOM   1965  OH  TYR A 263     -12.823 -35.358  30.642  1.00 80.92           O  
ATOM   1966  N   GLY A 264      -8.571 -32.889  26.313  1.00 25.91           N  
ATOM   1967  CA  GLY A 264      -9.496 -31.983  25.661  1.00 21.27           C  
ATOM   1968  C   GLY A 264      -9.816 -32.541  24.276  1.00 23.07           C  
ATOM   1969  O   GLY A 264      -9.062 -33.344  23.705  1.00 25.86           O  
ATOM   1970  N   LEU A 265     -10.947 -32.088  23.794  1.00 23.56           N  
ATOM   1971  CA  LEU A 265     -11.537 -32.566  22.562  1.00 26.65           C  
ATOM   1972  C   LEU A 265     -12.237 -31.344  21.956  1.00 27.04           C  
ATOM   1973  O   LEU A 265     -13.041 -30.658  22.628  1.00 23.67           O  
ATOM   1974  CB  LEU A 265     -12.584 -33.655  22.879  1.00 27.27           C  
ATOM   1975  CG  LEU A 265     -12.649 -34.995  22.175  1.00 60.41           C  
ATOM   1976  CD1 LEU A 265     -12.763 -34.816  20.658  1.00 50.33           C  
ATOM   1977  CD2 LEU A 265     -11.395 -35.779  22.546  1.00 66.28           C  
ATOM   1978  N   GLY A 266     -11.951 -31.022  20.694  1.00 24.66           N  
ATOM   1979  CA  GLY A 266     -12.640 -29.907  20.061  1.00 28.90           C  
ATOM   1980  C   GLY A 266     -12.729 -30.028  18.549  1.00 30.41           C  
ATOM   1981  O   GLY A 266     -12.123 -30.912  17.929  1.00 27.92           O  
ATOM   1982  N   ALA A 267     -13.472 -29.113  17.964  1.00 24.95           N  
ATOM   1983  CA  ALA A 267     -13.627 -29.097  16.532  1.00 33.88           C  
ATOM   1984  C   ALA A 267     -13.626 -27.690  16.016  1.00 31.63           C  
ATOM   1985  O   ALA A 267     -13.943 -26.760  16.764  1.00 24.94           O  
ATOM   1986  CB  ALA A 267     -14.947 -29.688  16.119  1.00 24.74           C  
ATOM   1987  N   SER A 268     -13.311 -27.544  14.737  1.00 29.24           N  
ATOM   1988  CA  SER A 268     -13.505 -26.275  14.076  1.00 25.82           C  
ATOM   1989  C   SER A 268     -14.077 -26.503  12.695  1.00 31.52           C  
ATOM   1990  O   SER A 268     -13.861 -27.550  12.082  1.00 28.68           O  
ATOM   1991  CB  SER A 268     -12.188 -25.504  13.964  1.00 24.92           C  
ATOM   1992  OG  SER A 268     -11.044 -26.303  13.739  1.00 39.59           O  
ATOM   1993  N   TYR A 269     -14.763 -25.494  12.230  1.00 26.59           N  
ATOM   1994  CA  TYR A 269     -15.364 -25.502  10.940  1.00 25.66           C  
ATOM   1995  C   TYR A 269     -14.905 -24.252  10.228  1.00 25.81           C  
ATOM   1996  O   TYR A 269     -15.202 -23.132  10.648  1.00 25.05           O  
ATOM   1997  CB  TYR A 269     -16.841 -25.513  11.147  1.00 23.54           C  
ATOM   1998  CG  TYR A 269     -17.518 -25.612   9.808  1.00 33.37           C  
ATOM   1999  CD1 TYR A 269     -17.639 -26.848   9.204  1.00 29.64           C  
ATOM   2000  CD2 TYR A 269     -17.940 -24.462   9.180  1.00 39.37           C  
ATOM   2001  CE1 TYR A 269     -18.189 -26.926   7.938  1.00 52.56           C  
ATOM   2002  CE2 TYR A 269     -18.482 -24.534   7.916  1.00 51.57           C  
ATOM   2003  CZ  TYR A 269     -18.605 -25.768   7.301  1.00 58.86           C  
ATOM   2004  OH  TYR A 269     -19.150 -25.833   6.027  1.00 61.25           O  
ATOM   2005  N   ASP A 270     -14.225 -24.389   9.114  1.00 22.56           N  
ATOM   2006  CA  ASP A 270     -13.728 -23.239   8.392  1.00 20.61           C  
ATOM   2007  C   ASP A 270     -14.818 -22.578   7.539  1.00 29.68           C  
ATOM   2008  O   ASP A 270     -15.426 -23.238   6.697  1.00 34.39           O  
ATOM   2009  CB  ASP A 270     -12.550 -23.739   7.549  1.00 24.95           C  
ATOM   2010  CG  ASP A 270     -11.686 -22.678   6.877  1.00 33.53           C  
ATOM   2011  OD1 ASP A 270     -12.079 -21.518   6.858  1.00 33.68           O  
ATOM   2012  OD2 ASP A 270     -10.599 -23.005   6.391  1.00 54.40           O  
ATOM   2013  N   LEU A 271     -15.094 -21.291   7.724  1.00 24.09           N  
ATOM   2014  CA  LEU A 271     -16.068 -20.546   6.940  1.00 21.32           C  
ATOM   2015  C   LEU A 271     -15.387 -19.861   5.747  1.00 23.96           C  
ATOM   2016  O   LEU A 271     -16.039 -19.186   4.965  1.00 23.54           O  
ATOM   2017  CB  LEU A 271     -16.718 -19.450   7.764  1.00 19.85           C  
ATOM   2018  CG  LEU A 271     -17.482 -19.817   9.037  1.00 23.59           C  
ATOM   2019  CD1 LEU A 271     -18.005 -18.566   9.724  1.00 24.13           C  
ATOM   2020  CD2 LEU A 271     -18.614 -20.710   8.684  1.00 25.97           C  
ATOM   2021  N   GLY A 272     -14.077 -19.917   5.657  1.00 21.11           N  
ATOM   2022  CA  GLY A 272     -13.297 -19.265   4.646  1.00 20.61           C  
ATOM   2023  C   GLY A 272     -13.020 -17.808   4.960  1.00 23.49           C  
ATOM   2024  O   GLY A 272     -13.642 -17.214   5.841  1.00 26.07           O  
ATOM   2025  N   GLY A 273     -12.048 -17.183   4.294  1.00 16.10           N  
ATOM   2026  CA  GLY A 273     -11.850 -15.758   4.404  1.00 15.88           C  
ATOM   2027  C   GLY A 273     -11.120 -15.370   5.693  1.00 23.40           C  
ATOM   2028  O   GLY A 273     -10.858 -14.193   5.896  1.00 24.50           O  
ATOM   2029  N   GLY A 274     -10.716 -16.337   6.529  1.00 27.38           N  
ATOM   2030  CA  GLY A 274     -10.024 -16.087   7.796  1.00 27.44           C  
ATOM   2031  C   GLY A 274     -10.951 -16.319   9.003  1.00 31.13           C  
ATOM   2032  O   GLY A 274     -10.559 -15.962  10.109  1.00 26.17           O  
ATOM   2033  N   ALA A 275     -12.150 -16.880   8.849  1.00 21.61           N  
ATOM   2034  CA  ALA A 275     -13.084 -17.081   9.935  1.00 21.23           C  
ATOM   2035  C   ALA A 275     -13.397 -18.550  10.106  1.00 31.65           C  
ATOM   2036  O   ALA A 275     -13.438 -19.304   9.129  1.00 22.67           O  
ATOM   2037  CB  ALA A 275     -14.384 -16.338   9.664  1.00 16.02           C  
ATOM   2038  N   SER A 276     -13.567 -19.003  11.350  1.00 19.43           N  
ATOM   2039  CA  SER A 276     -13.933 -20.370  11.654  1.00 19.76           C  
ATOM   2040  C   SER A 276     -14.798 -20.406  12.926  1.00 25.83           C  
ATOM   2041  O   SER A 276     -14.736 -19.480  13.750  1.00 23.50           O  
ATOM   2042  CB  SER A 276     -12.659 -21.228  11.821  1.00 21.87           C  
ATOM   2043  OG  SER A 276     -11.650 -20.655  12.638  1.00 34.39           O  
ATOM   2044  N   ILE A 277     -15.679 -21.387  13.049  1.00 22.23           N  
ATOM   2045  CA  ILE A 277     -16.508 -21.592  14.227  1.00 22.99           C  
ATOM   2046  C   ILE A 277     -15.711 -22.641  14.979  1.00 28.21           C  
ATOM   2047  O   ILE A 277     -15.281 -23.638  14.373  1.00 23.58           O  
ATOM   2048  CB  ILE A 277     -17.884 -22.116  13.800  1.00 26.04           C  
ATOM   2049  CG1 ILE A 277     -18.611 -21.066  13.027  1.00 28.06           C  
ATOM   2050  CG2 ILE A 277     -18.730 -22.472  15.023  1.00 24.61           C  
ATOM   2051  CD1 ILE A 277     -19.860 -21.684  12.370  1.00 28.49           C  
ATOM   2052  N   VAL A 278     -15.414 -22.462  16.276  1.00 24.26           N  
ATOM   2053  CA  VAL A 278     -14.525 -23.365  17.035  1.00 25.14           C  
ATOM   2054  C   VAL A 278     -15.179 -23.631  18.396  1.00 25.78           C  
ATOM   2055  O   VAL A 278     -15.724 -22.712  19.016  1.00 23.74           O  
ATOM   2056  CB  VAL A 278     -13.131 -22.725  17.291  1.00 22.54           C  
ATOM   2057  CG1 VAL A 278     -12.205 -23.783  17.813  1.00 18.27           C  
ATOM   2058  CG2 VAL A 278     -12.549 -22.120  16.040  1.00 24.97           C  
ATOM   2059  N   GLY A 279     -15.140 -24.844  18.907  1.00 22.69           N  
ATOM   2060  CA  GLY A 279     -15.720 -25.165  20.201  1.00 23.27           C  
ATOM   2061  C   GLY A 279     -14.945 -26.330  20.772  1.00 25.33           C  
ATOM   2062  O   GLY A 279     -14.236 -27.024  20.031  1.00 26.35           O  
ATOM   2063  N   GLY A 280     -15.009 -26.605  22.070  1.00 22.79           N  
ATOM   2064  CA  GLY A 280     -14.234 -27.694  22.641  1.00 23.14           C  
ATOM   2065  C   GLY A 280     -14.617 -27.915  24.096  1.00 20.25           C  
ATOM   2066  O   GLY A 280     -15.400 -27.157  24.669  1.00 22.34           O  
ATOM   2067  N   ILE A 281     -14.043 -28.956  24.637  1.00 18.86           N  
ATOM   2068  CA  ILE A 281     -14.332 -29.423  25.969  1.00 27.28           C  
ATOM   2069  C   ILE A 281     -12.965 -29.757  26.547  1.00 24.01           C  
ATOM   2070  O   ILE A 281     -12.083 -30.231  25.818  1.00 25.84           O  
ATOM   2071  CB  ILE A 281     -15.335 -30.615  25.721  1.00 34.33           C  
ATOM   2072  CG1 ILE A 281     -16.473 -30.269  26.569  1.00 32.29           C  
ATOM   2073  CG2 ILE A 281     -14.878 -32.035  26.009  1.00 32.21           C  
ATOM   2074  CD1 ILE A 281     -17.453 -29.412  25.782  1.00 41.67           C  
ATOM   2075  N   ALA A 282     -12.689 -29.490  27.833  1.00 25.05           N  
ATOM   2076  CA  ALA A 282     -11.411 -29.873  28.421  1.00 21.98           C  
ATOM   2077  C   ALA A 282     -11.621 -30.175  29.916  1.00 30.82           C  
ATOM   2078  O   ALA A 282     -12.518 -29.625  30.583  1.00 25.28           O  
ATOM   2079  CB  ALA A 282     -10.373 -28.757  28.319  1.00 19.90           C  
ATOM   2080  N   ASP A 283     -10.792 -31.067  30.451  1.00 29.24           N  
ATOM   2081  CA  ASP A 283     -10.865 -31.448  31.852  1.00 27.15           C  
ATOM   2082  C   ASP A 283      -9.629 -32.154  32.344  1.00 28.94           C  
ATOM   2083  O   ASP A 283      -8.650 -32.367  31.612  1.00 25.65           O  
ATOM   2084  CB  ASP A 283     -12.056 -32.351  32.044  1.00 25.99           C  
ATOM   2085  CG  ASP A 283     -12.651 -32.316  33.442  1.00 44.57           C  
ATOM   2086  OD1 ASP A 283     -12.188 -31.605  34.358  1.00 33.69           O  
ATOM   2087  OD2 ASP A 283     -13.632 -33.032  33.566  1.00 35.12           O  
ATOM   2088  N   ASN A 284      -9.624 -32.469  33.630  1.00 25.13           N  
ATOM   2089  CA  ASN A 284      -8.575 -33.323  34.132  1.00 24.84           C  
ATOM   2090  C   ASN A 284      -9.281 -34.178  35.168  1.00 32.53           C  
ATOM   2091  O   ASN A 284     -10.446 -33.966  35.501  1.00 27.71           O  
ATOM   2092  CB  ASN A 284      -7.428 -32.531  34.784  1.00 22.73           C  
ATOM   2093  CG  ASN A 284      -7.841 -31.655  35.937  1.00 35.10           C  
ATOM   2094  OD1 ASN A 284      -8.594 -32.043  36.830  1.00 32.48           O  
ATOM   2095  ND2 ASN A 284      -7.398 -30.419  35.956  1.00 26.62           N  
ATOM   2096  N   ASP A 285      -8.571 -35.160  35.662  1.00 26.45           N  
ATOM   2097  CA  ASP A 285      -9.119 -36.062  36.668  1.00 41.39           C  
ATOM   2098  C   ASP A 285      -8.918 -35.651  38.136  1.00 38.31           C  
ATOM   2099  O   ASP A 285      -9.037 -36.477  39.045  1.00 41.71           O  
ATOM   2100  CB  ASP A 285      -8.515 -37.458  36.442  1.00 22.77           C  
ATOM   2101  CG  ASP A 285      -7.018 -37.619  36.682  1.00 23.18           C  
ATOM   2102  OD1 ASP A 285      -6.299 -36.642  36.961  1.00 33.04           O  
ATOM   2103  OD2 ASP A 285      -6.564 -38.760  36.574  1.00 41.33           O  
ATOM   2104  N   LEU A 286      -8.522 -34.433  38.464  1.00 31.53           N  
ATOM   2105  CA  LEU A 286      -8.375 -34.096  39.864  1.00 25.13           C  
ATOM   2106  C   LEU A 286      -9.781 -34.072  40.470  1.00 41.07           C  
ATOM   2107  O   LEU A 286     -10.786 -33.987  39.738  1.00 43.63           O  
ATOM   2108  CB  LEU A 286      -7.705 -32.751  39.998  1.00 27.21           C  
ATOM   2109  CG  LEU A 286      -6.270 -32.835  39.611  1.00 27.72           C  
ATOM   2110  CD1 LEU A 286      -5.760 -31.443  39.694  1.00 35.20           C  
ATOM   2111  CD2 LEU A 286      -5.476 -33.794  40.484  1.00 33.80           C  
ATOM   2112  N   PRO A 287      -9.877 -34.225  41.816  1.00 72.08           N  
ATOM   2113  CA  PRO A 287     -11.137 -34.283  42.564  1.00 57.25           C  
ATOM   2114  C   PRO A 287     -12.204 -33.202  42.339  1.00 55.50           C  
ATOM   2115  O   PRO A 287     -13.372 -33.508  42.071  1.00 64.32           O  
ATOM   2116  CB  PRO A 287     -10.653 -34.366  44.012  1.00 64.34           C  
ATOM   2117  CG  PRO A 287      -9.230 -33.836  43.996  1.00 69.23           C  
ATOM   2118  CD  PRO A 287      -8.755 -34.511  42.729  1.00 60.19           C  
ATOM   2119  N   ASN A 288     -11.828 -31.922  42.497  1.00 54.09           N  
ATOM   2120  CA  ASN A 288     -12.770 -30.799  42.318  1.00 73.15           C  
ATOM   2121  C   ASN A 288     -13.272 -30.582  40.876  1.00 74.10           C  
ATOM   2122  O   ASN A 288     -14.484 -30.447  40.665  1.00 75.41           O  
ATOM   2123  CB  ASN A 288     -12.090 -29.477  42.876  1.00 81.36           C  
ATOM   2124  CG  ASN A 288     -12.242 -28.127  42.121  1.00 97.42           C  
ATOM   2125  OD1 ASN A 288     -13.325 -27.546  41.955  1.00 97.46           O  
ATOM   2126  ND2 ASN A 288     -11.144 -27.539  41.643  1.00101.92           N  
ATOM   2127  N   SER A 289     -12.316 -30.570  39.928  1.00 69.19           N  
ATOM   2128  CA  SER A 289     -12.486 -30.226  38.533  1.00 50.17           C  
ATOM   2129  C   SER A 289     -13.769 -30.567  37.808  1.00 43.85           C  
ATOM   2130  O   SER A 289     -14.129 -31.734  37.591  1.00 46.69           O  
ATOM   2131  CB  SER A 289     -11.310 -30.821  37.778  1.00 52.12           C  
ATOM   2132  OG  SER A 289     -10.127 -30.246  38.340  1.00 71.82           O  
ATOM   2133  N   ASP A 290     -14.474 -29.478  37.467  1.00 38.06           N  
ATOM   2134  CA  ASP A 290     -15.638 -29.592  36.585  1.00 44.01           C  
ATOM   2135  C   ASP A 290     -15.048 -29.256  35.203  1.00 33.18           C  
ATOM   2136  O   ASP A 290     -14.076 -28.504  35.098  1.00 32.33           O  
ATOM   2137  CB  ASP A 290     -16.736 -28.563  36.815  1.00 56.50           C  
ATOM   2138  CG  ASP A 290     -16.866 -28.005  38.221  1.00 77.24           C  
ATOM   2139  OD1 ASP A 290     -16.176 -27.018  38.549  1.00 84.59           O  
ATOM   2140  OD2 ASP A 290     -17.688 -28.568  38.949  1.00 73.57           O  
ATOM   2141  N   MET A 291     -15.650 -29.801  34.153  1.00 36.97           N  
ATOM   2142  CA  MET A 291     -15.240 -29.609  32.773  1.00 34.70           C  
ATOM   2143  C   MET A 291     -15.491 -28.176  32.316  1.00 26.12           C  
ATOM   2144  O   MET A 291     -16.588 -27.636  32.596  1.00 28.32           O  
ATOM   2145  CB  MET A 291     -16.046 -30.548  31.941  1.00 33.14           C  
ATOM   2146  CG  MET A 291     -15.721 -30.633  30.469  1.00 52.66           C  
ATOM   2147  SD  MET A 291     -17.054 -31.586  29.705  1.00 48.22           S  
ATOM   2148  CE  MET A 291     -18.376 -30.408  29.816  1.00 41.88           C  
ATOM   2149  N   VAL A 292     -14.461 -27.601  31.653  1.00 30.89           N  
ATOM   2150  CA  VAL A 292     -14.602 -26.296  30.995  1.00 28.79           C  
ATOM   2151  C   VAL A 292     -15.001 -26.548  29.519  1.00 27.78           C  
ATOM   2152  O   VAL A 292     -14.798 -27.642  28.964  1.00 23.47           O  
ATOM   2153  CB  VAL A 292     -13.278 -25.451  31.060  1.00 21.26           C  
ATOM   2154  CG1 VAL A 292     -13.068 -25.121  32.513  1.00 24.54           C  
ATOM   2155  CG2 VAL A 292     -12.062 -26.151  30.493  1.00 17.97           C  
ATOM   2156  N   ALA A 293     -15.630 -25.598  28.853  1.00 24.90           N  
ATOM   2157  CA  ALA A 293     -16.075 -25.765  27.478  1.00 28.34           C  
ATOM   2158  C   ALA A 293     -16.194 -24.388  26.843  1.00 31.62           C  
ATOM   2159  O   ALA A 293     -16.271 -23.380  27.571  1.00 21.58           O  
ATOM   2160  CB  ALA A 293     -17.455 -26.411  27.425  1.00 21.46           C  
ATOM   2161  N   ASP A 294     -16.208 -24.253  25.507  1.00 20.79           N  
ATOM   2162  CA  ASP A 294     -16.521 -22.962  24.906  1.00 18.22           C  
ATOM   2163  C   ASP A 294     -17.085 -23.151  23.509  1.00 23.81           C  
ATOM   2164  O   ASP A 294     -16.994 -24.277  22.981  1.00 21.81           O  
ATOM   2165  CB  ASP A 294     -15.275 -22.092  24.862  1.00 16.80           C  
ATOM   2166  CG  ASP A 294     -14.135 -22.482  23.933  1.00 28.79           C  
ATOM   2167  OD1 ASP A 294     -14.298 -23.157  22.922  1.00 23.51           O  
ATOM   2168  OD2 ASP A 294     -13.027 -22.066  24.222  1.00 20.09           O  
ATOM   2169  N   LEU A 295     -17.630 -22.092  22.934  1.00 22.29           N  
ATOM   2170  CA  LEU A 295     -18.156 -22.143  21.590  1.00 23.66           C  
ATOM   2171  C   LEU A 295     -18.129 -20.735  21.068  1.00 20.00           C  
ATOM   2172  O   LEU A 295     -18.736 -19.833  21.657  1.00 18.17           O  
ATOM   2173  CB  LEU A 295     -19.584 -22.665  21.597  1.00 22.86           C  
ATOM   2174  CG  LEU A 295     -20.239 -22.727  20.174  1.00 36.71           C  
ATOM   2175  CD1 LEU A 295     -19.494 -23.716  19.279  1.00 28.60           C  
ATOM   2176  CD2 LEU A 295     -21.662 -23.194  20.270  1.00 32.46           C  
ATOM   2177  N   GLY A 296     -17.427 -20.481  19.963  1.00 17.67           N  
ATOM   2178  CA  GLY A 296     -17.406 -19.135  19.432  1.00 17.33           C  
ATOM   2179  C   GLY A 296     -16.815 -19.125  18.034  1.00 21.99           C  
ATOM   2180  O   GLY A 296     -16.764 -20.163  17.371  1.00 20.73           O  
ATOM   2181  N   VAL A 297     -16.360 -17.965  17.591  1.00 23.91           N  
ATOM   2182  CA  VAL A 297     -15.762 -17.790  16.259  1.00 24.04           C  
ATOM   2183  C   VAL A 297     -14.373 -17.194  16.384  1.00 27.04           C  
ATOM   2184  O   VAL A 297     -14.139 -16.389  17.291  1.00 20.84           O  
ATOM   2185  CB  VAL A 297     -16.662 -16.873  15.351  1.00 20.97           C  
ATOM   2186  CG1 VAL A 297     -17.934 -17.628  15.031  1.00 27.35           C  
ATOM   2187  CG2 VAL A 297     -17.101 -15.596  16.010  1.00 23.73           C  
ATOM   2188  N   LYS A 298     -13.401 -17.578  15.569  1.00 18.69           N  
ATOM   2189  CA  LYS A 298     -12.053 -17.027  15.608  1.00 16.67           C  
ATOM   2190  C   LYS A 298     -11.825 -16.348  14.264  1.00 23.47           C  
ATOM   2191  O   LYS A 298     -12.314 -16.874  13.261  1.00 24.58           O  
ATOM   2192  CB  LYS A 298     -11.017 -18.111  15.770  1.00 19.12           C  
ATOM   2193  CG  LYS A 298     -10.986 -18.627  17.195  1.00 21.33           C  
ATOM   2194  CD  LYS A 298     -10.117 -19.822  17.223  1.00 18.34           C  
ATOM   2195  CE  LYS A 298      -8.728 -19.349  17.070  1.00 21.34           C  
ATOM   2196  NZ  LYS A 298      -7.845 -20.499  17.110  1.00 30.35           N  
ATOM   2197  N   PHE A 299     -11.150 -15.210  14.187  1.00 18.24           N  
ATOM   2198  CA  PHE A 299     -10.953 -14.448  12.960  1.00 17.66           C  
ATOM   2199  C   PHE A 299      -9.485 -14.163  12.794  1.00 26.51           C  
ATOM   2200  O   PHE A 299      -8.769 -13.944  13.784  1.00 22.18           O  
ATOM   2201  CB  PHE A 299     -11.681 -13.135  13.055  1.00 14.69           C  
ATOM   2202  CG  PHE A 299     -13.179 -13.199  13.267  1.00 21.01           C  
ATOM   2203  CD1 PHE A 299     -13.978 -14.058  12.533  1.00 22.78           C  
ATOM   2204  CD2 PHE A 299     -13.765 -12.359  14.185  1.00 20.84           C  
ATOM   2205  CE1 PHE A 299     -15.346 -14.077  12.712  1.00 23.54           C  
ATOM   2206  CE2 PHE A 299     -15.137 -12.388  14.348  1.00 22.22           C  
ATOM   2207  CZ  PHE A 299     -15.934 -13.240  13.619  1.00 21.26           C  
ATOM   2208  N   LYS A 300      -8.952 -14.173  11.593  1.00 17.76           N  
ATOM   2209  CA  LYS A 300      -7.572 -13.787  11.346  1.00 17.46           C  
ATOM   2210  C   LYS A 300      -7.649 -12.631  10.356  1.00 24.16           C  
ATOM   2211  O   LYS A 300      -8.564 -12.607   9.499  1.00 26.46           O  
ATOM   2212  CB  LYS A 300      -6.813 -14.912  10.727  1.00 22.55           C  
ATOM   2213  CG  LYS A 300      -6.657 -16.072  11.650  1.00 34.41           C  
ATOM   2214  CD  LYS A 300      -5.385 -16.857  11.324  1.00 54.10           C  
ATOM   2215  CE  LYS A 300      -5.453 -17.720  10.063  1.00 75.73           C  
ATOM   2216  NZ  LYS A 300      -4.221 -18.486   9.901  1.00 84.85           N  
ATOM   2217  N   PHE A 301      -6.747 -11.655  10.457  1.00 19.50           N  
ATOM   2218  CA  PHE A 301      -6.819 -10.437   9.678  1.00 18.21           C  
ATOM   2219  C   PHE A 301      -5.466 -10.102   9.104  1.00 22.86           C  
ATOM   2220  O   PHE A 301      -4.454 -10.631   9.571  1.00 17.64           O  
ATOM   2221  CB  PHE A 301      -7.251  -9.193  10.471  1.00 18.80           C  
ATOM   2222  CG  PHE A 301      -8.614  -9.367  11.100  1.00 24.96           C  
ATOM   2223  CD1 PHE A 301      -9.760  -9.256  10.344  1.00 18.68           C  
ATOM   2224  CD2 PHE A 301      -8.718  -9.610  12.461  1.00 23.97           C  
ATOM   2225  CE1 PHE A 301     -11.019  -9.379  10.920  1.00 19.16           C  
ATOM   2226  CE2 PHE A 301      -9.983  -9.730  13.030  1.00 19.39           C  
ATOM   2227  CZ  PHE A 301     -11.135  -9.616  12.275  1.00 20.43           C  
ATOM   2228  OXT PHE A 301      -5.445  -9.316   8.144  1.00 28.38           O  
TER    2229      PHE A 301                                                      
HETATM 2230 CA    CA A 302       5.011 -23.190  25.968  1.00 21.26          CA  
HETATM 2231 CA    CA A 303      -2.860 -23.590  25.053  1.00 18.82          CA  
HETATM 2232 CA    CA A 304      19.713 -10.305  32.535  1.00 19.02          CA  
HETATM 2233  C1  C8E A 545       8.213 -29.709  34.111  0.88 42.96           C  
HETATM 2234  C2  C8E A 545       7.552 -28.411  34.504  0.88 41.67           C  
HETATM 2235  C3  C8E A 545       6.087 -28.660  34.394  0.88 42.57           C  
HETATM 2236  C4  C8E A 545       5.485 -27.321  34.709  0.88 43.55           C  
HETATM 2237  C5  C8E A 545       4.152 -27.105  34.003  0.88 44.03           C  
HETATM 2238  C6  C8E A 545       3.097 -28.172  34.277  0.88 42.16           C  
HETATM 2239  C7  C8E A 545       1.680 -27.738  33.857  0.88 39.75           C  
HETATM 2240  C8  C8E A 545       0.806 -28.916  34.194  0.88 37.75           C  
HETATM 2241  O9  C8E A 545      -0.600 -28.806  34.267  0.88 38.94           O  
HETATM 2242  C10 C8E A 545      -1.108 -29.343  35.484  0.88 40.72           C  
HETATM 2243  C11 C8E A 545      -2.584 -29.539  35.411  0.88 45.43           C  
HETATM 2244  O12 C8E A 545      -3.364 -29.456  36.593  0.88 54.18           O  
HETATM 2245  C13 C8E A 545      -3.888 -28.142  36.821  0.88 63.79           C  
HETATM 2246  C14 C8E A 545      -3.546 -27.475  38.160  0.88 72.45           C  
HETATM 2247  O15 C8E A 545      -3.840 -28.181  39.385  0.88 79.05           O  
HETATM 2248  C16 C8E A 545      -4.714 -27.481  40.299  0.88 84.79           C  
HETATM 2249  C17 C8E A 545      -6.141 -28.045  40.520  0.88 88.54           C  
HETATM 2250  O18 C8E A 545      -6.994 -27.791  41.671  0.88 91.31           O  
HETATM 2251  C19 C8E A 545      -6.710 -28.672  42.798  0.88 93.11           C  
HETATM 2252  C20 C8E A 545      -7.835 -29.597  43.315  0.88 93.71           C  
HETATM 2253  O21 C8E A 545      -8.715 -29.939  42.235  0.88 93.34           O  
HETATM 2254  C1  C8E A 546     -16.910 -30.948  20.987  0.83 50.61           C  
HETATM 2255  C2  C8E A 546     -17.003 -29.492  20.487  0.83 51.77           C  
HETATM 2256  C3  C8E A 546     -18.226 -28.681  20.944  0.83 50.98           C  
HETATM 2257  C4  C8E A 546     -18.230 -28.157  22.386  0.83 51.13           C  
HETATM 2258  C5  C8E A 546     -19.478 -27.295  22.528  0.83 52.63           C  
HETATM 2259  C6  C8E A 546     -19.775 -26.873  23.954  0.83 55.60           C  
HETATM 2260  C7  C8E A 546     -21.264 -26.522  24.126  0.83 60.07           C  
HETATM 2261  C8  C8E A 546     -21.652 -25.072  23.799  0.83 64.27           C  
HETATM 2262  O9  C8E A 546     -23.025 -24.744  23.463  0.83 66.21           O  
HETATM 2263  C10 C8E A 546     -23.879 -24.185  24.492  0.83 66.45           C  
HETATM 2264  C11 C8E A 546     -24.241 -22.690  24.589  0.83 65.91           C  
HETATM 2265  O12 C8E A 546     -25.371 -22.371  25.423  0.83 65.26           O  
HETATM 2266  C13 C8E A 546     -25.072 -21.784  26.706  0.83 65.04           C  
HETATM 2267  C14 C8E A 546     -25.775 -20.508  27.231  0.83 64.60           C  
HETATM 2268  O15 C8E A 546     -25.456 -19.172  26.782  0.83 63.35           O  
HETATM 2269  C16 C8E A 546     -25.077 -18.304  27.864  0.83 61.87           C  
HETATM 2270  C17 C8E A 546     -25.057 -16.798  27.655  0.83 60.37           C  
HETATM 2271  O18 C8E A 546     -24.686 -15.946  28.736  0.83 60.64           O  
HETATM 2272  C19 C8E A 546     -25.722 -14.991  28.972  0.83 62.75           C  
HETATM 2273  C20 C8E A 546     -26.625 -15.182  30.187  0.83 65.74           C  
HETATM 2274  O21 C8E A 546     -27.717 -14.265  30.253  0.83 68.59           O  
HETATM 2275  C1  C8E A 547     -27.555 -14.778  24.966  0.69 53.41           C  
HETATM 2276  C2  C8E A 547     -26.516 -15.667  24.244  0.69 52.85           C  
HETATM 2277  C3  C8E A 547     -25.613 -14.788  23.406  0.69 51.32           C  
HETATM 2278  C4  C8E A 547     -24.590 -15.611  22.646  0.69 50.00           C  
HETATM 2279  C5  C8E A 547     -23.742 -14.660  21.812  0.69 48.73           C  
HETATM 2280  C6  C8E A 547     -22.770 -15.402  20.910  0.69 49.05           C  
HETATM 2281  C7  C8E A 547     -21.887 -14.406  20.188  0.69 50.17           C  
HETATM 2282  C8  C8E A 547     -20.855 -15.059  19.282  0.69 51.75           C  
HETATM 2283  O9  C8E A 547     -21.254 -15.638  18.040  0.69 53.80           O  
HETATM 2284  C10 C8E A 547     -20.727 -16.961  17.815  0.69 55.39           C  
HETATM 2285  C11 C8E A 547     -21.412 -18.239  18.340  0.69 57.31           C  
HETATM 2286  O12 C8E A 547     -20.997 -19.520  17.825  0.69 59.43           O  
HETATM 2287  C13 C8E A 547     -21.900 -20.072  16.839  0.69 62.71           C  
HETATM 2288  C14 C8E A 547     -21.762 -19.847  15.315  0.69 66.12           C  
HETATM 2289  O15 C8E A 547     -21.863 -18.520  14.749  0.69 68.53           O  
HETATM 2290  C16 C8E A 547     -21.503 -18.438  13.354  0.69 69.38           C  
HETATM 2291  C17 C8E A 547     -22.432 -17.855  12.267  0.69 69.19           C  
HETATM 2292  O18 C8E A 547     -23.574 -18.559  11.772  0.69 69.55           O  
HETATM 2293  C19 C8E A 547     -23.224 -19.417  10.680  0.69 71.17           C  
HETATM 2294  C20 C8E A 547     -23.699 -19.093   9.256  0.69 73.02           C  
HETATM 2295  O21 C8E A 547     -23.190 -19.997   8.271  0.69 74.35           O  
HETATM 2296  C1  C8E A 548       8.635 -40.960  22.015  0.66 38.33           C  
HETATM 2297  C2  C8E A 548       7.129 -40.823  22.217  0.66 39.82           C  
HETATM 2298  C3  C8E A 548       6.553 -41.828  23.201  0.66 42.86           C  
HETATM 2299  C4  C8E A 548       5.132 -41.410  23.650  0.66 46.04           C  
HETATM 2300  C5  C8E A 548       4.404 -42.484  24.470  0.66 48.47           C  
HETATM 2301  C6  C8E A 548       3.158 -42.049  25.250  0.66 49.60           C  
HETATM 2302  C7  C8E A 548       1.937 -41.675  24.427  0.66 50.98           C  
HETATM 2303  C8  C8E A 548       0.665 -42.117  25.157  0.66 53.35           C  
HETATM 2304  O9  C8E A 548       0.300 -41.619  26.461  0.66 56.73           O  
HETATM 2305  C10 C8E A 548      -1.055 -41.115  26.530  0.66 60.75           C  
HETATM 2306  C11 C8E A 548      -1.893 -41.075  27.835  0.66 64.78           C  
HETATM 2307  O12 C8E A 548      -2.307 -42.251  28.554  0.66 68.03           O  
HETATM 2308  C13 C8E A 548      -3.602 -42.750  28.183  0.66 70.92           C  
HETATM 2309  C14 C8E A 548      -4.589 -43.152  29.296  0.66 73.54           C  
HETATM 2310  O15 C8E A 548      -5.324 -42.194  30.083  0.66 75.50           O  
HETATM 2311  C16 C8E A 548      -6.755 -42.418  30.010  0.66 77.12           C  
HETATM 2312  C17 C8E A 548      -7.846 -41.611  30.782  0.66 78.17           C  
HETATM 2313  O18 C8E A 548      -8.228 -40.241  30.482  0.66 78.30           O  
HETATM 2314  C19 C8E A 548      -9.532 -40.067  29.908  0.66 78.18           C  
HETATM 2315  C20 C8E A 548      -9.622 -39.737  28.426  0.66 78.11           C  
HETATM 2316  O21 C8E A 548     -10.967 -39.509  28.017  0.66 79.53           O  
HETATM 2317  O   HOH A 305       6.190 -23.830  27.989  1.00 20.83           O  
HETATM 2318  O   HOH A 306      -2.513  -6.904  20.688  1.00 16.79           O  
HETATM 2319  O   HOH A 307       3.039 -23.016  24.751  1.00 20.86           O  
HETATM 2320  O   HOH A 308      17.950 -13.715  34.357  1.00 19.18           O  
HETATM 2321  O   HOH A 309      -4.859  -6.074  21.898  1.00 17.25           O  
HETATM 2322  O   HOH A 310       6.039 -11.790  23.498  1.00 19.05           O  
HETATM 2323  O   HOH A 311      18.294 -13.615  30.404  1.00 18.03           O  
HETATM 2324  O   HOH A 312       4.466 -25.396  25.736  1.00 18.77           O  
HETATM 2325  O   HOH A 313      -6.309 -26.069  24.210  1.00 19.97           O  
HETATM 2326  O   HOH A 314      19.069  -8.882  30.781  1.00 16.16           O  
HETATM 2327  O   HOH A 315      18.817 -16.108  33.989  1.00 22.41           O  
HETATM 2328  O   HOH A 316      10.011 -23.278  25.760  1.00 19.18           O  
HETATM 2329  O   HOH A 317      18.991 -18.503   7.840  1.00 26.78           O  
HETATM 2330  O   HOH A 318      -7.473 -27.703  26.057  1.00 23.41           O  
HETATM 2331  O   HOH A 319     -13.465 -11.566  27.451  1.00 17.66           O  
HETATM 2332  O   HOH A 320      11.714 -25.598  25.532  1.00 19.10           O  
HETATM 2333  O   HOH A 321      13.702  -8.194  22.282  1.00 17.80           O  
HETATM 2334  O   HOH A 322      -2.605 -12.728  24.049  1.00 21.07           O  
HETATM 2335  O   HOH A 323      -7.669 -27.382  30.103  1.00 21.64           O  
HETATM 2336  O   HOH A 324       8.492 -23.381  29.404  1.00 23.75           O  
HETATM 2337  O   HOH A 325     -11.446 -14.377  24.890  1.00 23.49           O  
HETATM 2338  O   HOH A 326      -7.805 -13.385  19.252  1.00 21.15           O  
HETATM 2339  O   HOH A 327      -1.282 -22.004  25.223  1.00 26.61           O  
HETATM 2340  O   HOH A 328      10.411 -16.311  26.801  1.00 17.22           O  
HETATM 2341  O   HOH A 329      16.385 -22.562  27.462  1.00 18.42           O  
HETATM 2342  O   HOH A 330      15.053 -19.043  24.819  1.00 21.28           O  
HETATM 2343  O   HOH A 331      -2.033 -23.630  22.810  1.00 20.17           O  
HETATM 2344  O   HOH A 332      16.071 -18.702  16.398  1.00 23.35           O  
HETATM 2345  O   HOH A 333      11.348  -6.919  22.129  1.00 20.95           O  
HETATM 2346  O   HOH A 334      10.900 -18.006  19.817  1.00 19.73           O  
HETATM 2347  O   HOH A 335       2.111  -8.782  11.097  1.00 21.76           O  
HETATM 2348  O   HOH A 336      15.747 -19.876  27.405  1.00 21.38           O  
HETATM 2349  O   HOH A 337       8.435   0.102  28.114  1.00 20.97           O  
HETATM 2350  O   HOH A 338      14.119 -13.294  35.691  1.00 24.59           O  
HETATM 2351  O   HOH A 339       3.274 -23.071  27.583  1.00 22.54           O  
HETATM 2352  O   HOH A 340       3.727  -5.504  27.684  1.00 30.10           O  
HETATM 2353  O   HOH A 341      20.299 -15.296   4.898  1.00 27.64           O  
HETATM 2354  O   HOH A 342      -7.206 -29.986  29.888  1.00 24.28           O  
HETATM 2355  O   HOH A 343      -7.959 -18.152  20.294  1.00 28.57           O  
HETATM 2356  O   HOH A 344       8.762  -4.598  30.296  1.00 31.66           O  
HETATM 2357  O   HOH A 345      -7.654 -16.035  18.504  1.00 27.53           O  
HETATM 2358  O   HOH A 346       5.672 -25.355  30.536  1.00 33.44           O  
HETATM 2359  O   HOH A 347       7.619  -6.968   7.308  1.00 28.72           O  
HETATM 2360  O   HOH A 348      12.106 -27.183  47.407  1.00 24.32           O  
HETATM 2361  O   HOH A 349       0.478 -23.170  21.728  1.00 32.87           O  
HETATM 2362  O   HOH A 350      18.157 -15.935   6.506  1.00 25.47           O  
HETATM 2363  O   HOH A 351      12.279 -17.795  29.840  1.00 20.42           O  
HETATM 2364  O   HOH A 352      14.939 -10.637  35.420  1.00 23.31           O  
HETATM 2365  O   HOH A 353     -17.331 -18.796  32.329  1.00 28.26           O  
HETATM 2366  O   HOH A 354     -10.692 -19.212   6.721  1.00 31.00           O  
HETATM 2367  O   HOH A 355     -10.459 -12.836  28.783  1.00 28.25           O  
HETATM 2368  O   HOH A 356     -11.477 -26.875  19.463  1.00 29.65           O  
HETATM 2369  O   HOH A 357      16.141  -3.886   4.277  1.00 31.85           O  
HETATM 2370  O   HOH A 358       4.524 -23.752  21.031  1.00 29.74           O  
HETATM 2371  O   HOH A 359     -10.030 -18.674  11.768  1.00 26.75           O  
HETATM 2372  O   HOH A 360     -24.381 -19.610  33.507  1.00 42.24           O  
HETATM 2373  O   HOH A 361       0.000   0.000  29.011  0.33 48.27           O  
HETATM 2374  O   HOH A 362       4.589 -24.630  46.774  1.00 32.73           O  
HETATM 2375  O   HOH A 363       6.578 -32.633  49.463  1.00 37.66           O  
HETATM 2376  O   HOH A 364      25.694  -6.688   4.569  1.00 40.03           O  
HETATM 2377  O   HOH A 365       1.755  -2.930  26.627  1.00 29.16           O  
HETATM 2378  O   HOH A 366      -5.526 -19.104  20.325  1.00 43.77           O  
HETATM 2379  O   HOH A 367      -7.843 -16.280  15.397  1.00 34.97           O  
HETATM 2380  O   HOH A 368      19.857 -29.108  43.670  1.00 37.84           O  
HETATM 2381  O   HOH A 369     -11.211 -17.107  28.043  1.00 35.39           O  
HETATM 2382  O   HOH A 370      14.990   0.034  26.464  1.00 36.44           O  
HETATM 2383  O   HOH A 371      -8.092 -22.145  19.499  1.00 36.57           O  
HETATM 2384  O   HOH A 372      10.405 -22.698  48.281  1.00 43.83           O  
HETATM 2385  O   HOH A 373      11.850 -23.603  46.017  1.00 33.68           O  
HETATM 2386  O   HOH A 374       4.425 -11.538  20.182  1.00 35.76           O  
HETATM 2387  O   HOH A 375       7.444 -13.328  21.435  1.00 32.10           O  
HETATM 2388  O   HOH A 376      -2.266 -33.722  16.734  1.00 27.51           O  
HETATM 2389  O   HOH A 377       6.830 -21.304  30.790  1.00 40.21           O  
HETATM 2390  O   HOH A 378      -2.927 -15.540  24.275  1.00 47.68           O  
HETATM 2391  O   HOH A 379     -10.545 -20.059  28.206  1.00 34.03           O  
HETATM 2392  O   HOH A 380      -1.346 -12.314  13.279  1.00 43.15           O  
HETATM 2393  O   HOH A 381      13.767 -31.917  11.168  1.00 41.20           O  
HETATM 2394  O   HOH A 382      17.255  -3.976  35.357  1.00 36.40           O  
HETATM 2395  O   HOH A 383       0.396  -4.333   6.326  1.00 39.85           O  
HETATM 2396  O   HOH A 384     -12.123 -22.655  35.807  1.00 48.67           O  
HETATM 2397  O   HOH A 385      23.092 -24.324  40.946  1.00 47.58           O  
HETATM 2398  O   HOH A 386      25.532 -15.924   6.357  1.00 40.32           O  
HETATM 2399  O   HOH A 387      13.903 -23.443  52.205  1.00 38.71           O  
HETATM 2400  O   HOH A 388       0.585  -6.342  28.179  1.00 38.73           O  
HETATM 2401  O   HOH A 389      -6.137 -17.395  25.246  1.00 39.55           O  
HETATM 2402  O   HOH A 390     -11.281 -26.866   9.706  1.00 44.19           O  
HETATM 2403  O   HOH A 391      15.765 -28.449  56.448  1.00 44.93           O  
HETATM 2404  O   HOH A 392       9.171  -8.256  34.890  1.00 41.01           O  
HETATM 2405  O   HOH A 393      -6.013 -32.205  10.535  1.00 37.42           O  
HETATM 2406  O   HOH A 394      18.746 -31.079  42.115  1.00 49.33           O  
HETATM 2407  O   HOH A 395       6.332 -11.876  18.420  1.00 53.49           O  
HETATM 2408  O   HOH A 396       8.026  -2.478  31.687  1.00 46.06           O  
HETATM 2409  O   HOH A 397      -0.055 -34.380  47.695  1.00 50.52           O  
HETATM 2410  O   HOH A 398      21.271 -25.134   5.337  1.00 44.63           O  
HETATM 2411  O   HOH A 399      -9.488 -22.353  13.924  1.00 46.80           O  
HETATM 2412  O   HOH A 400      15.734 -19.165   9.159  1.00 56.53           O  
HETATM 2413  O   HOH A 401       2.338 -26.278  18.066  1.00 41.82           O  
HETATM 2414  O   HOH A 402      10.433 -23.644  51.740  1.00 40.08           O  
HETATM 2415  O   HOH A 403      12.597 -21.278  37.850  1.00 51.56           O  
HETATM 2416  O   HOH A 404     -25.186 -24.967  30.656  1.00 54.32           O  
HETATM 2417  O   HOH A 405      18.299  -6.839  40.824  1.00 44.63           O  
HETATM 2418  O   HOH A 406       4.650 -23.154  18.361  1.00 75.55           O  
HETATM 2419  O   HOH A 407      -0.008  -4.901  30.754  1.00 49.18           O  
HETATM 2420  O   HOH A 408       1.872 -33.925  49.640  1.00 57.48           O  
HETATM 2421  O   HOH A 409       7.040 -24.438  17.754  1.00 42.07           O  
HETATM 2422  O   HOH A 410      -3.254 -13.637  11.943  1.00 48.26           O  
HETATM 2423  O   HOH A 411      18.028 -20.224   9.740  1.00 48.76           O  
HETATM 2424  O   HOH A 412      25.458  -8.685   6.151  1.00 61.69           O  
HETATM 2425  O   HOH A 413      12.316   1.336  29.307  1.00 45.17           O  
HETATM 2426  O   HOH A 414     -12.699 -18.312  34.507  1.00 42.63           O  
HETATM 2427  O   HOH A 415      16.663 -21.820  11.396  1.00 53.03           O  
HETATM 2428  O   HOH A 416       7.348 -12.211  28.736  1.00 39.48           O  
HETATM 2429  O   HOH A 417      10.478 -12.015  14.973  1.00 46.65           O  
HETATM 2430  O   HOH A 418      -5.879 -30.859  46.808  1.00 48.30           O  
HETATM 2431  O   HOH A 419      13.821 -10.350   6.801  1.00 53.86           O  
HETATM 2432  O   HOH A 420      10.873 -19.767  38.963  1.00 68.06           O  
HETATM 2433  O   HOH A 421      -3.553 -27.075  16.792  1.00 49.89           O  
HETATM 2434  O   HOH A 422      -4.659 -28.801  12.842  1.00 61.39           O  
HETATM 2435  O   HOH A 423       4.059 -19.738  23.834  1.00 57.43           O  
HETATM 2436  O   HOH A 424       0.410 -28.151  30.141  1.00 41.42           O  
HETATM 2437  O   HOH A 425       7.366 -39.760  38.638  1.00 50.68           O  
HETATM 2438  O   HOH A 426       1.421  -2.870  29.704  1.00 45.66           O  
HETATM 2439  O   HOH A 427      -7.977 -18.799  13.558  1.00 51.14           O  
HETATM 2440  O   HOH A 428      -9.936 -18.793  30.658  1.00 40.22           O  
HETATM 2441  O   HOH A 429      -0.583 -26.657  18.732  1.00 42.31           O  
HETATM 2442  O   HOH A 430       9.412 -14.531  34.411  1.00 46.27           O  
HETATM 2443  O   HOH A 431     -11.155 -17.058  32.393  1.00 49.31           O  
HETATM 2444  O   HOH A 432       4.672  -9.906  30.002  1.00 51.14           O  
HETATM 2445  O   HOH A 433       9.764 -22.104  43.517  1.00 61.72           O  
HETATM 2446  O   HOH A 434       3.091 -25.536  29.792  1.00 54.50           O  
HETATM 2447  O   HOH A 435      -3.234 -19.131  23.927  1.00 48.27           O  
HETATM 2448  O   HOH A 436       7.747 -11.972  31.658  1.00 44.09           O  
HETATM 2449  O   HOH A 437     -21.260 -27.979  29.311  1.00 52.83           O  
HETATM 2450  O   HOH A 438      -3.320 -15.277  14.229  1.00 60.95           O  
HETATM 2451  O   HOH A 439      -3.236 -23.883  48.320  1.00 57.64           O  
HETATM 2452  O   HOH A 440       6.985  -0.498   5.672  1.00 55.03           O  
HETATM 2453  O   HOH A 441      13.244 -18.776  16.145  1.00 47.33           O  
HETATM 2454  O   HOH A 442      12.435 -24.416  49.444  1.00 42.38           O  
HETATM 2455  O   HOH A 443      11.545 -34.010  48.466  1.00 47.66           O  
HETATM 2456  O   HOH A 444       7.079 -16.967  24.430  1.00 44.53           O  
HETATM 2457  O   HOH A 445     -13.286 -27.152  39.025  1.00 62.40           O  
HETATM 2458  O   HOH A 446       5.906 -18.733  19.699  1.00 74.18           O  
HETATM 2459  O   HOH A 447      23.374 -11.624  43.898  1.00 50.06           O  
HETATM 2460  O   HOH A 448       8.721   0.013  30.916  1.00 39.51           O  
HETATM 2461  O   HOH A 449      -3.066  -8.233   6.997  1.00 53.63           O  
HETATM 2462  O   HOH A 450      -7.364 -20.734  29.488  1.00 37.68           O  
HETATM 2463  O   HOH A 451       5.654 -12.347  12.613  1.00 53.20           O  
HETATM 2464  O   HOH A 452      -8.412 -26.868  14.398  1.00 47.15           O  
HETATM 2465  O   HOH A 453       4.183 -22.036  46.452  1.00 58.11           O  
HETATM 2466  O   HOH A 454     -16.832 -30.212   5.669  1.00 66.31           O  
HETATM 2467  O   HOH A 455      18.868 -33.707   4.064  1.00 70.96           O  
HETATM 2468  O   HOH A 456      -3.664 -39.512  36.539  1.00 51.90           O  
HETATM 2469  O   HOH A 457      27.016 -12.573   5.049  1.00 76.94           O  
HETATM 2470  O   HOH A 458     -25.119 -23.325  33.171  1.00 75.09           O  
HETATM 2471  O   HOH A 459      -1.458  -7.896  28.585  1.00 56.50           O  
HETATM 2472  O   HOH A 460      11.504 -38.042  43.991  1.00 45.95           O  
HETATM 2473  O   HOH A 461     -11.171 -18.623   1.902  1.00 59.14           O  
HETATM 2474  O   HOH A 462      10.010 -10.532  10.832  1.00 52.16           O  
HETATM 2475  O   HOH A 463      13.737  -7.752  35.913  1.00 35.27           O  
HETATM 2476  O   HOH A 464      25.692 -15.689  34.348  1.00 67.65           O  
HETATM 2477  O   HOH A 465      15.408 -35.291   2.794  1.00 73.43           O  
HETATM 2478  O   HOH A 466       8.907 -34.814  48.496  1.00 57.98           O  
HETATM 2479  O   HOH A 467       4.516 -34.612  49.401  1.00 72.32           O  
HETATM 2480  O   HOH A 468      -9.019 -15.380  28.445  1.00 70.17           O  
HETATM 2481  O   HOH A 469     -10.223 -12.395  26.157  1.00 36.34           O  
HETATM 2482  O   HOH A 470      -5.859 -25.485  16.336  1.00 56.33           O  
HETATM 2483  O   HOH A 471      13.126 -33.897   4.119  1.00 75.50           O  
HETATM 2484  O   HOH A 472      -1.899 -19.466  26.293  1.00 66.81           O  
HETATM 2485  O   HOH A 473      -5.232 -26.610  46.500  1.00 54.10           O  
HETATM 2486  O   HOH A 474       3.194 -39.452  42.635  1.00 58.95           O  
HETATM 2487  O   HOH A 475       5.417 -19.041  32.998  1.00 64.71           O  
HETATM 2488  O   HOH A 476      -5.159 -20.076  27.294  1.00 53.66           O  
HETATM 2489  O   HOH A 477      -7.560 -20.565  33.886  1.00 74.59           O  
HETATM 2490  O   HOH A 478      14.733 -29.399   8.426  1.00 52.60           O  
HETATM 2491  O   HOH A 479      12.989  -5.891   3.303  1.00 73.28           O  
HETATM 2492  O   HOH A 480      11.888  -4.745  37.090  1.00 79.45           O  
HETATM 2493  O   HOH A 481      -9.719 -33.018   3.473  1.00 79.74           O  
HETATM 2494  O   HOH A 482      -4.477 -30.281  44.408  1.00 55.45           O  
HETATM 2495  O   HOH A 483      23.282  -4.364  40.147  1.00 62.96           O  
HETATM 2496  O   HOH A 484      -2.579 -20.233  21.451  1.00 54.07           O  
HETATM 2497  O   HOH A 485      -0.965 -23.721  18.378  1.00 69.32           O  
HETATM 2498  O   HOH A 486       4.489  -3.984  31.120  1.00 70.03           O  
HETATM 2499  O   HOH A 487       8.811 -22.700  16.234  1.00 66.77           O  
HETATM 2500  O   HOH A 488       2.660 -12.859  10.427  1.00 58.10           O  
HETATM 2501  O   HOH A 489      -1.387 -22.273  29.103  1.00 65.27           O  
HETATM 2502  O   HOH A 490     -24.219 -16.069  32.703  1.00 56.86           O  
HETATM 2503  O   HOH A 491      13.243 -24.599  13.470  1.00 56.42           O  
HETATM 2504  O   HOH A 492      12.805 -39.013  36.774  1.00 56.25           O  
HETATM 2505  O   HOH A 493      -9.880 -19.986   9.385  1.00 49.66           O  
HETATM 2506  O   HOH A 494      13.601 -14.414  38.762  1.00 62.01           O  
HETATM 2507  O   HOH A 495      -3.474 -42.227  33.006  1.00 61.29           O  
HETATM 2508  O   HOH A 496      10.775 -20.406  17.335  1.00 61.82           O  
HETATM 2509  O   HOH A 497     -16.983 -22.582   4.035  1.00 81.82           O  
HETATM 2510  O   HOH A 498      -0.061 -32.045  16.343  1.00 52.03           O  
HETATM 2511  O   HOH A 499       1.700  -8.945  27.927  1.00 55.91           O  
HETATM 2512  O   HOH A 500       6.985 -35.205  10.094  1.00 54.60           O  
HETATM 2513  O   HOH A 501     -18.744 -29.204  33.911  1.00 62.48           O  
HETATM 2514  O   HOH A 502      -3.013 -32.508  44.619  1.00 56.15           O  
HETATM 2515  O   HOH A 503      -9.599 -26.433  17.708  1.00 47.52           O  
HETATM 2516  O   HOH A 504      23.100 -23.126   5.577  1.00 66.96           O  
HETATM 2517  O   HOH A 505      -9.245 -18.936  35.479  1.00 88.14           O  
HETATM 2518  O   HOH A 506       2.537 -11.203  26.087  1.00 70.57           O  
HETATM 2519  O   HOH A 507      25.103 -27.995  42.947  1.00 77.52           O  
HETATM 2520  O   HOH A 508      10.413 -40.233  37.531  1.00 68.06           O  
HETATM 2521  O   HOH A 509      -0.334 -29.010  17.030  1.00 60.83           O  
HETATM 2522  O   HOH A 510      -9.223 -11.719   6.742  1.00 43.72           O  
HETATM 2523  O   HOH A 511      -1.417  -2.836  32.189  1.00 64.23           O  
HETATM 2524  O   HOH A 512       2.862 -14.652  12.746  1.00 67.86           O  
HETATM 2525  O   HOH A 513      -1.741 -11.688  16.055  1.00 48.46           O  
HETATM 2526  O   HOH A 514       1.544 -22.784  46.295  1.00 58.53           O  
HETATM 2527  O   HOH A 515      18.967 -28.869  46.391  1.00 49.61           O  
HETATM 2528  O   HOH A 516      18.900  -1.671  35.946  1.00 63.03           O  
HETATM 2529  O   HOH A 517      25.588  -9.757  43.162  1.00 70.54           O  
HETATM 2530  O   HOH A 518      -5.187 -16.800  15.371  1.00 71.25           O  
HETATM 2531  O   HOH A 519      23.680 -16.891  38.002  1.00 49.95           O  
HETATM 2532  O   HOH A 520      22.376 -19.370  38.400  1.00 48.64           O  
HETATM 2533  O   HOH A 521       3.024 -14.199  16.344  1.00 66.81           O  
HETATM 2534  O   HOH A 522     -20.871 -27.856  37.688  1.00 77.42           O  
HETATM 2535  O   HOH A 523      14.349 -31.425  53.433  1.00 76.39           O  
HETATM 2536  O   HOH A 524      25.962  -3.949  39.123  1.00 73.03           O  
HETATM 2537  O   HOH A 525      -1.900 -17.739  19.749  1.00 77.39           O  
HETATM 2538  O   HOH A 526      15.300 -15.636   5.977  1.00 67.58           O  
HETATM 2539  O   HOH A 527      14.023 -21.234  12.521  1.00 62.67           O  
HETATM 2540  O   HOH A 528      -2.577 -33.369  47.317  1.00 67.32           O  
HETATM 2541  O   HOH A 529       3.580 -21.150  21.484  1.00 76.35           O  
HETATM 2542  O   HOH A 530      13.429  -0.224  31.429  1.00 66.81           O  
HETATM 2543  O   HOH A 531      24.396 -18.463  40.400  1.00 71.46           O  
HETATM 2544  O   HOH A 532       8.064 -11.657  35.360  1.00 79.97           O  
HETATM 2545  O   HOH A 533       4.163 -19.214  29.519  1.00 65.18           O  
HETATM 2546  O   HOH A 534      16.247  -4.931  40.302  1.00 66.98           O  
HETATM 2547  O   HOH A 535     -12.361 -20.969  33.706  1.00 57.49           O  
HETATM 2548  O   HOH A 536       2.542 -10.157   8.311  1.00 63.19           O  
HETATM 2549  O   HOH A 537     -10.391 -21.350   3.340  1.00 61.09           O  
HETATM 2550  O   HOH A 538      22.816 -29.263  43.850  1.00 71.51           O  
HETATM 2551  O   HOH A 539       1.548 -32.124  14.108  1.00 65.27           O  
HETATM 2552  O   HOH A 540       4.442 -14.466  22.488  1.00 66.67           O  
HETATM 2553  O   HOH A 541      14.949 -15.727   9.137  1.00 57.15           O  
HETATM 2554  O   HOH A 542      -3.841 -17.336  21.933  1.00 73.37           O  
HETATM 2555  O   HOH A 543       0.148  -1.579  25.046  1.00 57.28           O  
HETATM 2556  O   HOH A 544       1.772 -33.983  12.170  1.00 64.62           O  
HETATM 2557  O   HOH A 549     -17.923 -26.775  15.606  1.00 45.08           O  
HETATM 2558  O   HOH A 550      23.530 -24.401  25.957  1.00 57.73           O  
HETATM 2559  O   HOH A 551      26.759 -24.207  11.635  1.00 54.12           O  
HETATM 2560  O   HOH A 552      23.462 -20.651  22.231  1.00 49.12           O  
HETATM 2561  O   HOH A 553     -23.391 -27.104  30.643  1.00 53.13           O  
HETATM 2562  O   HOH A 554       3.998 -44.799  28.989  1.00 65.70           O  
HETATM 2563  O   HOH A 555      -8.344 -38.052  23.422  1.00 51.43           O  
HETATM 2564  O   HOH A 556     -19.689 -30.737  11.462  1.00 74.75           O  
HETATM 2565  O   HOH A 557      23.241 -22.420  24.265  1.00 58.01           O  
HETATM 2566  O   HOH A 558      20.793 -38.159  27.686  1.00 76.00           O  
HETATM 2567  O   HOH A 559      25.724 -26.198  13.506  1.00 63.30           O  
HETATM 2568  O   HOH A 560      28.575 -20.254   8.172  1.00 78.96           O  
HETATM 2569  O   HOH A 561      -6.785 -38.481  21.333  1.00 56.46           O  
HETATM 2570  O   HOH A 562      -8.442 -40.548  13.066  1.00 74.14           O  
HETATM 2571  O   HOH A 563       5.420 -44.518  31.307  1.00 72.99           O  
HETATM 2572  O   HOH A 564      -9.958 -37.743  18.331  1.00 62.33           O  
HETATM 2573  O   HOH A 565     -18.589 -32.618  15.228  1.00 72.81           O  
HETATM 2574  O   HOH A 566      18.004 -36.417  16.015  1.00 60.73           O  
HETATM 2575  O   HOH A 567     -20.827 -28.396  26.744  1.00 60.68           O  
HETATM 2576  O   HOH A 568      18.980 -40.765  25.192  1.00 66.66           O  
HETATM 2577  O   HOH A 569      20.580 -34.799  24.845  1.00 69.04           O  
HETATM 2578  O   HOH A 570      -9.200 -42.458  17.427  1.00 71.01           O  
HETATM 2579  O   HOH A 571       9.238 -44.707  26.611  1.00 69.97           O  
HETATM 2580  O   HOH A 572      -7.335 -42.291  15.281  1.00 83.29           O  
HETATM 2581  O   HOH A 573     -23.107 -27.093  18.628  1.00 74.27           O  
HETATM 2582  O   HOH A 574      -4.629 -42.624  14.481  1.00 69.37           O  
HETATM 2583  O   HOH A 575      20.398 -33.206  22.405  1.00 58.19           O  
HETATM 2584  O   HOH A 576      -9.431 -37.868  15.541  1.00 74.36           O  
HETATM 2585  O   HOH A 577     -17.338 -34.648  10.071  1.00 89.58           O  
HETATM 2586  O   HOH A 578      22.986 -33.974  26.496  1.00 75.72           O  
HETATM 2587  O   HOH A 579      22.497 -27.333  27.869  1.00 68.59           O  
HETATM 2588  O   HOH A 580     -10.506 -37.902  25.211  1.00 58.90           O  
HETATM 2589  O   HOH A 581       5.670 -43.729  27.194  1.00 69.01           O  
HETATM 2590  O   HOH A 582     -22.243 -24.640  11.035  1.00 82.74           O  
CONECT  590 2230                                                                
CONECT  591 2230                                                                
CONECT  693 2231                                                                
CONECT  694 2231                                                                
CONECT  709 2231                                                                
CONECT  710 2231                                                                
CONECT  744 2231                                                                
CONECT  752 2231                                                                
CONECT  807 2230                                                                
CONECT  871 2232                                                                
CONECT 1014 2232                                                                
CONECT 1015 2232                                                                
CONECT 1023 2232                                                                
CONECT 1039 2232                                                                
CONECT 2230  590  591  807 2317                                                 
CONECT 2230 2319 2324 2351                                                      
CONECT 2231  693  694  709  710                                                 
CONECT 2231  744  752 2339 2343                                                 
CONECT 2232  871 1014 1015 1023                                                 
CONECT 2232 1039 2326                                                           
CONECT 2233 2234                                                                
CONECT 2234 2233 2235                                                           
CONECT 2235 2234 2236                                                           
CONECT 2236 2235 2237                                                           
CONECT 2237 2236 2238                                                           
CONECT 2238 2237 2239                                                           
CONECT 2239 2238 2240                                                           
CONECT 2240 2239 2241                                                           
CONECT 2241 2240 2242                                                           
CONECT 2242 2241 2243                                                           
CONECT 2243 2242 2244                                                           
CONECT 2244 2243 2245                                                           
CONECT 2245 2244 2246                                                           
CONECT 2246 2245 2247                                                           
CONECT 2247 2246 2248                                                           
CONECT 2248 2247 2249                                                           
CONECT 2249 2248 2250                                                           
CONECT 2250 2249 2251                                                           
CONECT 2251 2250 2252                                                           
CONECT 2252 2251 2253                                                           
CONECT 2253 2252                                                                
CONECT 2254 2255                                                                
CONECT 2255 2254 2256                                                           
CONECT 2256 2255 2257                                                           
CONECT 2257 2256 2258                                                           
CONECT 2258 2257 2259                                                           
CONECT 2259 2258 2260                                                           
CONECT 2260 2259 2261                                                           
CONECT 2261 2260 2262                                                           
CONECT 2262 2261 2263                                                           
CONECT 2263 2262 2264                                                           
CONECT 2264 2263 2265                                                           
CONECT 2265 2264 2266                                                           
CONECT 2266 2265 2267                                                           
CONECT 2267 2266 2268                                                           
CONECT 2268 2267 2269                                                           
CONECT 2269 2268 2270                                                           
CONECT 2270 2269 2271                                                           
CONECT 2271 2270 2272                                                           
CONECT 2272 2271 2273                                                           
CONECT 2273 2272 2274                                                           
CONECT 2274 2273                                                                
CONECT 2275 2276                                                                
CONECT 2276 2275 2277                                                           
CONECT 2277 2276 2278                                                           
CONECT 2278 2277 2279                                                           
CONECT 2279 2278 2280                                                           
CONECT 2280 2279 2281                                                           
CONECT 2281 2280 2282                                                           
CONECT 2282 2281 2283                                                           
CONECT 2283 2282 2284                                                           
CONECT 2284 2283 2285                                                           
CONECT 2285 2284 2286                                                           
CONECT 2286 2285 2287                                                           
CONECT 2287 2286 2288                                                           
CONECT 2288 2287 2289                                                           
CONECT 2289 2288 2290                                                           
CONECT 2290 2289 2291                                                           
CONECT 2291 2290 2292                                                           
CONECT 2292 2291 2293                                                           
CONECT 2293 2292 2294                                                           
CONECT 2294 2293 2295                                                           
CONECT 2295 2294                                                                
CONECT 2296 2297                                                                
CONECT 2297 2296 2298                                                           
CONECT 2298 2297 2299                                                           
CONECT 2299 2298 2300                                                           
CONECT 2300 2299 2301                                                           
CONECT 2301 2300 2302                                                           
CONECT 2302 2301 2303                                                           
CONECT 2303 2302 2304                                                           
CONECT 2304 2303 2305                                                           
CONECT 2305 2304 2306                                                           
CONECT 2306 2305 2307                                                           
CONECT 2307 2306 2308                                                           
CONECT 2308 2307 2309                                                           
CONECT 2309 2308 2310                                                           
CONECT 2310 2309 2311                                                           
CONECT 2311 2310 2312                                                           
CONECT 2312 2311 2313                                                           
CONECT 2313 2312 2314                                                           
CONECT 2314 2313 2315                                                           
CONECT 2315 2314 2316                                                           
CONECT 2316 2315                                                                
CONECT 2317 2230                                                                
CONECT 2319 2230                                                                
CONECT 2324 2230                                                                
CONECT 2326 2232                                                                
CONECT 2339 2231                                                                
CONECT 2343 2231                                                                
CONECT 2351 2230                                                                
MASTER      453    4    7    3   17   17    9    6 2580    1  111   24          
END                                                                             
*/});