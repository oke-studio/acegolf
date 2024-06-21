export interface TypeAboutPageFields {
  aboutPageTitle: string
  aboutPageBlurb: string
  aceGolfStaffProfilesCollection: { items: TypeAceGolfStaffFields[] }
}

export interface TypeAceGolfStaffFields {
  nameOfPerson: string
  titleOfPerson: string
  typeOfPerson: string
  pictureOfPerson: {
    url: string
    fileName: string
  }
  description: string
  contactLink: string
  contactPhoneNumber:string
  contactEmail:string
}
